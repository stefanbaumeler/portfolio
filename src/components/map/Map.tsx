'use client'

import Mapbox, { Layer, Marker as MarkerEl, Source } from 'react-map-gl/mapbox'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useEffect, useRef, useState } from 'react'
import { useTopNavContext } from '@/context/top-nav'
import { TQMap, TQTravelArticles } from '~/schema'
import { greatCircle } from '@turf/great-circle'
import { Marker } from '@/components/map/Marker'
import { PlaceDrawer } from '@/components/map/PlaceDrawer'
import { useBodyContext } from '@/context/body'
import { TransportationDrawer } from '@/components/map/TransportationDrawer'
import { MapRef } from 'react-map-gl/mapbox-legacy'
import { MapMouseEvent } from 'mapbox-gl'
import { Infobox } from '@/components/map/Infobox'
import { useTheme } from 'next-themes'
import { slugify } from '@/helpers/slug'
import { useLocale } from 'next-intl'
import { ViewState } from 'react-map-gl'
import { getLineBounds, offsetCoordinates, zoomForBounds } from '@/helpers/map'

type Props = {
    places: (TQMap['place'][number] & { visits: Date[][] })[]
    initialPlace?: TQMap['place'][number] & { visits: Date[][] }
    transportation: TQMap['transportation']
    initialTransport?: TQMap['transportation'][number]
    articles: TQTravelArticles['secret_blog']
}

export const Map = ({
    places,
    initialPlace,
    transportation,
    initialTransport,
    articles
}: Props) => {
    const topNavContext = useTopNavContext()
    const locale = useLocale()
    const [activePlace, setActivePlace] = useState<TQMap['place'][number] & {
        visits: Date[][]
    } | undefined>(initialPlace)

    const [activeTransport, setActiveTransport] = useState<TQMap['transportation'][number] | undefined>(initialTransport)
    const [activeYear, setActiveYear] = useState<string | undefined>(undefined)
    const [mapLoaded, setMapLoaded] = useState(false)
    const theme = useTheme()
    const { isMobile } = useBodyContext()
    const containerEl = useRef<HTMLDivElement>(null)
    const mapEl = useRef<MapRef>(null)
    const [viewState, setViewState] = useState<Partial<ViewState>>({
        latitude: 20,
        longitude: 8.30635,
        zoom: 2
    })

    useEffect(() => {
        topNavContext.setTitle('Map')

        return () => {
            topNavContext.setTitle('')
        }
    }, [topNavContext])

    const previousTransport = useRef<TQMap['transportation'][number] | undefined>(undefined)

    useEffect(() => {
        if (previousTransport?.current?.id) {
            mapEl?.current?.setFeatureState({
                source: 'route',
                id: previousTransport.current.id
            }, {
                selected: false
            })
        }

        if (activeTransport?.id) {
            mapEl?.current?.setFeatureState({
                source: 'route',
                id: activeTransport.id
            }, {
                selected: true
            })

            previousTransport.current = activeTransport
        }
    }, [activeTransport, mapLoaded])

    const onClick = (event: MapMouseEvent) => {
        if (event.features?.length) {
            const transport = transportation.find((transport) => transport.id === event.features?.[0]?.properties?.id)

            setActiveTransport(transport)
            setActivePlace(undefined)

            if (transport) {
                window.history.replaceState(null, '', `/${locale}/map/${slugify(transport.from.internal)}/${slugify(transport.to.internal)}`)

                const line = greatCircle(transport.from.location.coordinates, transport.to.location.coordinates)
                const bounds = getLineBounds(line)

                const mapBounds = mapEl.current?.getBounds()

                if (!mapBounds?.contains(bounds.getNorthEast()) || !mapBounds?.contains(bounds.getSouthEast()) || window.innerWidth < 768) {
                    mapBounds?.extend(bounds)

                    if (mapBounds && mapEl.current) {
                        const zoom = Math.min(mapEl.current?.getZoom(), zoomForBounds(bounds, {
                            x: 350,
                            y: 100
                        }))

                        const fixedCoordinates = offsetCoordinates(bounds.getCenter(), zoom, {
                            desktop: {
                                x: 300,
                                y: 0
                            },
                            mobile: {
                                x: 0,
                                y: 250
                            }
                        })

                        mapEl.current.flyTo({
                            center: fixedCoordinates,
                            padding: 100,
                            zoom,
                            essential: true
                        })
                    }
                }
            }

            if (event.features[0]?.id) {
                mapEl?.current?.setFeatureState({
                    source: 'route',
                    id: event.features[0].id
                }, {
                    selected: true
                })
            }
        }
    }

    const onMouseEnter = (event: MapMouseEvent) => {
        if (mapEl.current) {
            if (event.features?.[0]?.id) {
                mapEl?.current?.setFeatureState({
                    source: 'route',
                    id: event.features[0].id
                }, {
                    hover: !isMobile
                })
            }
        }
    }

    const onMouseLeave = (event: MapMouseEvent) => {
        if (event.features?.[0]?.id) {
            transportation.forEach((transport) => {
                mapEl?.current?.setFeatureState({
                    source: 'route',
                    id: transport.id
                }, {
                    hover: false
                })
            })
        }
    }

    useEffect(() => {
        if (initialPlace) {
            setViewState({
                latitude: initialPlace.location.coordinates[1],
                longitude: initialPlace.location.coordinates[0],
                zoom: 8
            })

            return
        }

        if (!initialTransport) {
            return
        }

        const line = greatCircle(initialTransport.from.location.coordinates, initialTransport.to.location.coordinates)
        const bounds = getLineBounds(line)

        const zoom = zoomForBounds(bounds, {
            x: 350,
            y: 100
        })

        const fixedBounds = offsetCoordinates(bounds.getCenter(), zoom, {
            desktop: {
                x: 300,
                y: 0
            },
            mobile: {
                x: 0,
                y: 250
            }
        })

        setViewState({
            latitude: fixedBounds.lat,
            longitude: fixedBounds.lng,
            zoom: Math.min(zoom, 8)
        })
    }, [])

    return <div
        className="map"
        ref={containerEl}
    >
        <Mapbox
            {...viewState}
            onMove={(evt) => setViewState(evt.viewState)}
            ref={mapEl}
            onLoad={() => setMapLoaded(true)}
            style={{
                width: '100%',
                height: '100%'
            }}
            interactiveLayerIds={['clickable-lines', 'markers']}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            projection="mercator"
            mapStyle={`mapbox://styles/mapbox/${theme.resolvedTheme === 'dark' ? 'dark-v11' : 'streets-v12'}`}
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
            attributionControl={false}
            logoPosition={isMobile ? 'bottom-right' : 'top-right'}
        >
            <Source
                id="places"
                type="geojson"
                data={{
                    type: 'FeatureCollection',
                    features: places.map((place) => place.location)
                }}
            >
                <Layer
                    id="markers"
                    source="places"
                    type="symbol"
                />
            </Source>
            {places.map((place, key) => <MarkerEl
                key={key}
                latitude={place.location.coordinates[1]}
                longitude={place.location.coordinates[0]}
            >
                <Marker
                    activeYear={activeYear}
                    transportation={transportation}
                    activePlaceId={activePlace?.id}
                    place={place}
                    onClick={(event) => {
                        event.stopPropagation()
                        setActivePlace(place)
                        window.history.replaceState(null, '', `/${locale}/map/${slugify(place.internal)}`)
                        setActiveTransport(undefined)
                    }}
                />
            </MarkerEl>)}
            <Source
                id="route"
                type="geojson"
                data={{
                    type: 'FeatureCollection',
                    features: transportation.map((transport) => {
                        return {
                            ...greatCircle(transport.from.location.coordinates, transport.to.location.coordinates),
                            id: transport.id,
                            properties: {
                                id: transport.id
                            }
                        }
                    }) ?? []
                }}
            >
                <Layer
                    id="lines"
                    source="route"
                    type="line"
                    layout={{
                        'line-join': 'round',
                        'line-cap': 'round'
                    }}
                    paint={{
                        'line-color': [
                            'case',
                            ['boolean', ['feature-state', 'selected'], false],
                            'red',
                            '#666666'
                        ],
                        'line-width': [
                            'case',
                            ['boolean', ['feature-state', 'hover'], false],
                            5,
                            1
                        ]
                    }}
                />
                <Layer
                    id="clickable-lines"
                    source="route"
                    type="line"
                    layout={{
                        'line-join': 'round',
                        'line-cap': 'round'
                    }}
                    paint={{
                        'line-color': 'transparent',
                        'line-width': 20
                    }}
                />
            </Source>
        </Mapbox>
        <PlaceDrawer
            activePlace={activePlace}
            articles={articles}
            onClose={() => setActivePlace(undefined)}
        />
        <TransportationDrawer
            activeTransport={activeTransport}
            onClose={() => setActiveTransport(undefined)}
        />
        <Infobox
            transportation={transportation}
            activePlace={activePlace}
            activeTransport={activeTransport}
            onMouseEnterYear={(year) => setActiveYear(year)}
            onMouseLeaveYear={() => setActiveYear(undefined)}
        />
    </div>
}

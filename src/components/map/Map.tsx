'use client'

import Mapbox, { Layer, Marker as MarkerEl, Source } from 'react-map-gl/mapbox'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useEffect, useRef, useState } from 'react'
import { useTopNavContext } from '@/context/top-nav'
import { TQMap, TQTravelArticles } from '~/schema'
import { greatCircle } from '@turf/great-circle'
import { Marker } from '@/components/map/Marker'
import { PlaceDrawer } from '@/components/map/PlaceDrawer'
import { DarkMode, useDarkContext } from '@/context/dark'
import { useBodyContext } from '@/context/body'
import { TransportationDrawer } from '@/components/map/TransportationDrawer'
import { MapRef } from 'react-map-gl/mapbox-legacy'
import { MapMouseEvent } from 'mapbox-gl'
import { Infobox } from '@/components/map/Infobox'

type Props = {
    places: (TQMap['place'][number] & { visits: Date[][]})[]
    transportation: TQMap['transportation']
    articles: TQTravelArticles['secret_blog']
}

export const Map = ({
    places, transportation, articles
}: Props) => {
    const topNavContext = useTopNavContext()
    const [activePlace, setActivePlace] = useState<TQMap['place'][number] & { visits: Date[][]}>()
    const [activeTransport, setActiveTransport] = useState<TQMap['transportation'][number]>()
    const [activeYear, setActiveYear] = useState<string | undefined>(undefined)
    const { state } = useDarkContext()
    const { isMobile } = useBodyContext()
    const mapEl = useRef<MapRef>(null)

    useEffect(() => {
        topNavContext.setTitle('Map')

        return () => {
            topNavContext.setTitle('')
        }
    }, [topNavContext])

    const previousTransport = useRef(activeTransport)

    useEffect(() => {
        if (activeTransport?.id) {
            mapEl?.current?.setFeatureState({
                source: 'route',
                id: activeTransport.id
            }, {
                selected: true
            })
        }
        if (previousTransport?.current?.id) {
            mapEl?.current?.setFeatureState({
                source: 'route',
                id: previousTransport.current.id
            }, {
                selected: false
            })
        }

        previousTransport.current = activeTransport
    }, [activeTransport])

    const onClick = (event: MapMouseEvent) => {
        if (event.features?.length) {
            setActiveTransport(transportation.find((transport) => transport.id === event.features?.[0]?.properties?.id))
            setActivePlace(undefined)

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

    return <div className="map">
        <Mapbox
            ref={mapEl}
            style={{
                width: '100%',
                height: '100%'
            }}
            interactiveLayerIds={['clickable-lines', 'markers']}
            initialViewState={{
                latitude: 20,
                longitude: 8.30635,
                zoom: 2
            }}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            projection="mercator"
            mapStyle={`mapbox://styles/mapbox/${state === DarkMode.Dark ? 'dark-v11' : 'streets-v12'}`}
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

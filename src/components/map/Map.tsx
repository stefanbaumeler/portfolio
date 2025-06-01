'use client'

import Mapbox, { Layer, Marker as MarkerEl, Source } from 'react-map-gl/mapbox'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useEffect, useState } from 'react'
import { useTopNavContext } from '@/context/top-nav'
import { TQMap, TQTravelArticles } from '~/schema'
import { greatCircle } from '@turf/great-circle'
import { Marker } from '@/components/map/Marker'
import { PlaceDrawer } from '@/components/map/PlaceDrawer'
import { DarkMode, useDarkContext } from '@/context/dark'

type Props = {
    places: TQMap['place']
    transportation: TQMap['transportation']
    articles: TQTravelArticles['secret_blog']
}

export const Map = ({
    places, transportation, articles
}: Props) => {
    const topNavContext = useTopNavContext()
    const [activePlace, setActivePlace] = useState<TQMap['place'][number]>()
    const { state } = useDarkContext()

    useEffect(() => {
        topNavContext.setTitle('Map')

        return () => {
            topNavContext.setTitle('')
        }
    }, [topNavContext])

    return <div className="map">
        <Mapbox
            style={{
                width: '100%',
                height: '100%'
            }}
            initialViewState={{
                latitude: 20,
                longitude: 8.30635,
                zoom: 2
            }}
            projection="mercator"
            mapStyle={`mapbox://styles/mapbox/${state === DarkMode.Dark ? 'dark-v11' : 'streets-v12'}`}
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
            attributionControl={false}
            logoPosition="top-right"
        >
            {places.map((place, key) => <MarkerEl
                key={key}
                latitude={place.location.coordinates[1]}
                longitude={place.location.coordinates[0]}
            >
                <Marker
                    activePlaceId={activePlace?.id}
                    place={place}
                    onClick={() => setActivePlace(place)}
                />
            </MarkerEl>)}
            <Source
                id="route"
                type="geojson"
                data={{
                    type: 'FeatureCollection',
                    features: transportation.flatMap((transport) => [greatCircle(transport.from.location.coordinates, transport.to.location.coordinates)]) ?? []
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
                        'line-color': '#666666',
                        'line-width': 1
                    }}
                />
            </Source>
        </Mapbox>
        <PlaceDrawer
            activePlace={activePlace}
            transportation={transportation}
            articles={articles}
            onClose={() => setActivePlace(undefined)}
        />
    </div>
}

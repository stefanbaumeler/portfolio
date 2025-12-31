import { Map } from '@/components/map/Map'
import { getClient } from '@/gql/urql'
import { QMapDocument, QTravelArticlesDocument, TQMap, TQTravelArticles } from '~/schema'
import { getVisits } from '@/helpers/visits'
import { slugify } from '@/helpers/slug'

const MapPage = async ({ params }: { params: Promise<{ place: string[] }> }) => {
    const { data } = await getClient().query<TQMap>(QMapDocument, {})
    const { data: articlesData } = await getClient().query<TQTravelArticles>(QTravelArticlesDocument, {})

    const resolvedParams = await params

    const places = data?.place.map((place) => {
        const { visits } = getVisits(data?.transportation, place.id)

        return {
            ...place,
            visits: visits as Date[][]
        }
    }).filter((place) => {
        return +new Date() - +(place.visits[0]?.[0] ?? 0) > 0
    }) ?? []

    const transportation = data?.transportation.filter((transport) => {
        return +new Date() - +new Date(transport.arrival) > 0
    }) ?? []

    let initialPlace
    let initialTransport

    if (resolvedParams.place?.length === 1 || resolvedParams.place?.[1] === 'gallery') {
        const initialPlaceSlug = resolvedParams.place?.[0]

        initialPlace = places.find((place) => {
            return initialPlaceSlug === slugify(place.internal)
        })
    } else if (resolvedParams.place?.length === 2) {
        initialTransport = transportation.find((transport) => {
            return slugify(transport.from.internal) === resolvedParams.place?.[0] && slugify(transport.to.internal) === resolvedParams.place?.[1]
        })
    }

    return <Map
        initialPlace={initialPlace}
        initialTransport={initialTransport}
        places={places}
        transportation={transportation}
        articles={articlesData?.secret_blog ?? []}
    />
}

export default MapPage

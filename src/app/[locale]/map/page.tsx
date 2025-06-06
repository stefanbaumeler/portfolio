import { Map } from '@/components/map/Map'
import { getClient } from '@/gql/urql'
import { QMapDocument, QTravelArticlesDocument, TQMap, TQTravelArticles } from '~/schema'
import { getVisits } from '@/helpers/visits'

const MapPage = async () => {
    const { data } = await getClient().query<TQMap>(QMapDocument, {})
    const { data: articlesData } = await getClient().query<TQTravelArticles>(QTravelArticlesDocument, {})

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
        return +new Date() - +(new Date(transport.arrival) ?? 0) > 0
    }) ?? []

    return <Map
        places={places}
        transportation={transportation}
        articles={articlesData?.secret_blog ?? []}
    />
}

export default MapPage

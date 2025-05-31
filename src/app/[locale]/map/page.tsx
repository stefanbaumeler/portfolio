import { Map } from '@/components/map/Map'
import { getClient } from '@/gql/urql'
import { QMapDocument, QTravelArticlesDocument, TQMap, TQTravelArticles } from '~/schema'

const MapPage = async () => {
    const { data } = await getClient().query<TQMap>(QMapDocument, {})
    const { data: articlesData } = await getClient().query<TQTravelArticles>(QTravelArticlesDocument, {})

    return <Map
        places={data?.place ?? []}
        transportation={data?.transportation ?? []}
        articles={articlesData?.secret_blog ?? []}
    />
}

export default MapPage

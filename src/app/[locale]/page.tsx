import { Home } from '@/components/Home'
import { getClient } from '@/gql/urql'
import { QRootDocument, TQRoot } from '~/schema'

const HomePage = async () => {
    const { data } = await getClient().query<TQRoot>(QRootDocument, {})

    return <Home website={data?.website} />
}

export default HomePage

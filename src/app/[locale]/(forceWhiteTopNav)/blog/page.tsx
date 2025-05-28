import { Blogs } from '@/components/blog/Blogs'
import { getClient } from '@/gql/urql'
import { QRootDocument, TQRoot } from '~/schema'

const BlogPage = async () => {
    const { data } = await getClient().query<TQRoot>(QRootDocument, {})

    return <Blogs data={data} />
}

export default BlogPage

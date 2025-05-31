import { Articles } from '@/components/blog/Articles'
import { QTravelArticlesDocument, TQTravelArticles } from '~/schema'
import { getClient } from '@/gql/urql'
import { BlogMeta } from '@/components/blog/BlogMeta'

export const revalidate = 60
const TravelBlogPage = async () => {
    const { data } = await getClient().query<TQTravelArticles>(QTravelArticlesDocument, {})

    return <div className="blog">
        <h1 className="blog__title">
			Travel blog
        </h1>
        <div className="blog__meta">
            <BlogMeta
                years="2015 – 2017"
                posts={data?.secret_blog.length}
                language="Deutsch"
            />
        </div>
        <Articles articles={data?.secret_blog} />
    </div>
}

export default TravelBlogPage

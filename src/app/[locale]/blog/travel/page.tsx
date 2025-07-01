import { Articles } from '@/components/blog/Articles'
import { QTravelArticlesDocument, TQTravelArticles } from '~/schema'
import { getClient } from '@/gql/urql'
import { BlogMeta } from '@/components/blog/BlogMeta'
import { getTranslations } from 'next-intl/server'

export const revalidate = 60
const TravelBlogPage = async () => {
    const { data } = await getClient().query<TQTravelArticles>(QTravelArticlesDocument, {})
    const t = await getTranslations()

    return <div className="blog">
        <h1 className="blog__title">
            {t('Travel Blog')}
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

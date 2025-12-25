import { Articles } from '@/components/blog/Articles'
import { QTravelArticlesDocument, TQTravelArticles } from '~/schema'
import { getClient } from '@/gql/urql'
import { BlogMeta } from '@/components/blog/BlogMeta'
import { getTranslations } from 'next-intl/server'
import { TopNav } from '@/components/global/nav/TopNav'

const TravelBlogPage = async () => {
    const { data } = await getClient().query<TQTravelArticles>(QTravelArticlesDocument, {})
    const t = await getTranslations()

    return <div className="blog">
        <div className="blog__header">
            <div>
                <h1 className="blog__title">
                    {t('Travel Blog')}
                </h1>
                <TopNav />
            </div>
            <div className="blog__meta">
                <BlogMeta
                    years="2015 – 2017"
                    posts={data?.secret_blog.length}
                    language="Deutsch"
                />
            </div>
        </div>
        <div className="blog__content">
            <Articles articles={data?.secret_blog} />
        </div>
    </div>
}

export default TravelBlogPage

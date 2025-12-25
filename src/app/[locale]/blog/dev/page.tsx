import { QDevArticlesDocument, TQDevArticles } from '~/schema'
import { getClient } from '@/gql/urql'
import { Articles } from '@/components/blog/Articles'
import { getTranslations } from 'next-intl/server'
import { BlogMeta } from '@/components/blog/BlogMeta'
import { TopNav } from '@/components/global/nav/TopNav'

const DevBlogPage = async () => {
    const { data } = await getClient().query<TQDevArticles>(QDevArticlesDocument, {})
    const t = await getTranslations()

    return <div className="blog">
        <div className="blog__header">
            <div>
                <h1 className="blog__title">
                    Blog
                </h1>
                <TopNav />
            </div>
            <div className="blog__meta">
                <BlogMeta
                    years={`2025 - ${t('present')}`}
                    posts={data?.blog.length}
                    language="English"
                />
            </div>
        </div>
        <div className="blog__content">
            <Articles articles={data?.blog} />
        </div>
    </div>
}

export default DevBlogPage

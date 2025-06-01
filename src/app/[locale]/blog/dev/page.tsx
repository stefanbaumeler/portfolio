import { QDevArticlesDocument, TQDevArticles } from '~/schema'
import { getClient } from '@/gql/urql'
import { Articles } from '@/components/blog/Articles'
import { getTranslations } from 'next-intl/server'
import { BlogMeta } from '@/components/blog/BlogMeta'

export const revalidate = 60

const DevBlogPage = async () => {
    const { data } = await getClient().query<TQDevArticles>(QDevArticlesDocument, {})
    const t = await getTranslations()

    return <div className="blog">
        <h1 className="blog__title">
			Dev blog
        </h1>
        <div className="blog__meta">
            <BlogMeta
                years={`2025 - ${t('present')}`}
                posts={data?.blog.length}
                language="English"
            />
        </div>
        <Articles articles={data?.blog} />
    </div>
}

export default DevBlogPage

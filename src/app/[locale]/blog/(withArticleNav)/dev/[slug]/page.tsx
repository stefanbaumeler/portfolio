import { Article } from '@/components/blog/Article'
import { getClient } from '@/gql/urql'
import {
    QDevArticleDocument,
    QDevArticlesDocument,
    QDevPrevNextArticlesDocument,
    TQDevArticle,
    TQDevArticles,
    TQDevPrevNextArticles
} from '~/schema'

export const generateStaticParams = async () => {
    const { data } = await getClient().query<TQDevArticles>(QDevArticlesDocument, {})

    return data?.blog.map((article) => {
        return {
            slug: article.slug
        }
    }) ?? [{
        slug: ''
    }]
}

const DevBlogPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params

    const singleRes = await getClient().query<TQDevArticle>(QDevArticleDocument, {
        slug
    })

    const prevNext = await getClient().query<TQDevPrevNextArticles>(QDevPrevNextArticlesDocument, {
        date: singleRes.data?.blog[0]?.date_created
    })

    const article = singleRes.data?.blog[0]

    if (article) {
        return <Article
            article={article}
            prev={prevNext.data?.previous[0]}
            next={prevNext.data?.next[0]}
        />
    }

    return <></>
}

export default DevBlogPage

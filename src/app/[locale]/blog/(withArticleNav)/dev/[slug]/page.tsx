import { Article } from '@/components/blog/Article'
import { getClient } from '@/gql/urql'
import { QDevArticleDocument, QDevArticlesDocument, TQDevArticle, TQDevArticles } from '~/schema'

export const revalidate = 60

export async function generateStaticParams () {
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

    const allRes = await getClient().query<TQDevArticles>(QDevArticlesDocument, {})

    const article = singleRes.data?.blog[0]
    const articles = allRes.data?.blog

    const index = allRes.data?.blog.findIndex((other) => other.slug === article?.slug) ?? 0

    const prev = articles?.[index + 1]
    const next = articles?.[index - 1]

    if (article) {
        return <Article
            article={article}
            prev={prev}
            next={next}
        />
    }

    return <></>
}

export default DevBlogPage

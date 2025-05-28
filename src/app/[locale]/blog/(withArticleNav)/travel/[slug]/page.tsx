import { Article } from '@/components/blog/Article'
import { getClient } from '@/gql/urql'
import { QTravelArticleDocument, QTravelArticlesDocument, TQTravelArticle, TQTravelArticles } from '~/schema'

export const revalidate = 60

export async function generateStaticParams () {
    const { data } = await getClient().query<TQTravelArticles>(QTravelArticlesDocument, {})

    return data?.secret_blog.map((article) => {
        return {
            slug: article.slug
        }
    }) ?? [{
        slug: ''
    }]
}

const TravelBlogPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params

    const singleRes = await getClient().query<TQTravelArticle>(QTravelArticleDocument, {
        slug
    })

    const allRes = await getClient().query<TQTravelArticles>(QTravelArticlesDocument, {})

    const article = singleRes.data?.secret_blog[0]
    const articles = allRes.data?.secret_blog

    const index = allRes.data?.secret_blog.findIndex((other) => other.slug === article?.slug) ?? 0

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

export default TravelBlogPage

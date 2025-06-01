import { Article } from '@/components/blog/Article'
import { getClient } from '@/gql/urql'
import { QTravelArticleDocument,
    QTravelArticlesDocument, QTravelPrevNextArticlesDocument,
    TQTravelArticle,
    TQTravelArticles, TQTravelPrevNextArticles } from '~/schema'

export const revalidate = 60

export const generateStaticParams = async () => {
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

    const article = singleRes.data?.secret_blog[0]

    const prevNext = await getClient().query<TQTravelPrevNextArticles>(QTravelPrevNextArticlesDocument, {
        date: singleRes.data?.secret_blog[0]?.date_created
    })

    if (article) {
        return <Article
            article={article}
            prev={prevNext.data?.previous[0]}
            next={prevNext.data?.next[0]}
        />
    }

    return <></>
}

export default TravelBlogPage

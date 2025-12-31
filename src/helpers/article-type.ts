import {
    TQDevArticle,
    TQDevArticles,
    TQDevPrevNextArticles,
    TQTravelArticle,
    TQTravelArticles,
    TQTravelPrevNextArticles
} from '~/schema'

export const isTravelArticle = (article: TQTravelArticle['secret_blog'][number]
    | TQDevArticle['blog'][number]
    | TQTravelArticles['secret_blog'][number]
    | TQDevArticles['blog'][number]
    | TQTravelPrevNextArticles['previous'][number]
    | TQDevPrevNextArticles['previous'][number]
    | TQTravelPrevNextArticles['next'][number]
    | TQDevPrevNextArticles['next'][number]): article is TQTravelArticle['secret_blog'][number] | TQTravelArticles['secret_blog'][number] => {
    return article.__typename === 'secret_blog'
}

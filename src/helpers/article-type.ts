import { TQDevArticle, TQDevArticles, TQTravelArticle, TQTravelArticles } from '~/schema'

export const isTravelArticle = (article: TQTravelArticle['secret_blog'][number] | TQDevArticle['blog'][number] | TQTravelArticles['secret_blog'][number] | TQDevArticles['blog'][number]): article is TQTravelArticle['secret_blog'][number] | TQTravelArticles['secret_blog'][number]  => {
    return article.__typename === 'secret_blog'
}

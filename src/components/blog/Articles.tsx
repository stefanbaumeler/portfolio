import { TQDevArticles, TQTravelArticles } from '~/schema'
import { Teaser } from '@/components/blog/Teaser'
import { isTravelArticle } from '@/helpers/article-type'
import { getLocale, getTranslations } from 'next-intl/server'
import { ArticleMeta } from '@/components/blog/ArticleMeta'

type Props = {
	articles?: TQTravelArticles['secret_blog'] | TQDevArticles['blog']
}
export const Articles = async ({ articles = [] }: Props) => {
    const type = articles[0] && isTravelArticle(articles[0]) ? 'travel' : 'dev'
    const ChildTag = type === 'dev' ? 'div' : 'li'
    const locale = await getLocale()
    const t = await getTranslations()

    return <ul className={`articles articles--${type}`}>
        {articles.map((article, key) => <ChildTag
            className="articles__item"
            key={key}
        >
            <Teaser
                article={article}
                index={key}
            >
                <ArticleMeta
                    className="teaser__meta"
                    article={article}
                    locale={locale}
                    t={t}
                />
            </Teaser>
        </ChildTag>)}
    </ul>
}

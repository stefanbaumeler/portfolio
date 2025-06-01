import { TQDevArticles, TQTravelArticles } from '~/schema'
import { Teaser } from '@/components/blog/Teaser'
import { isTravelArticle } from '@/helpers/article-type'
import { Masonry } from '@/components/global/Masonry'
import { getLocale, getTranslations } from 'next-intl/server'
import { ArticleMeta } from '@/components/blog/ArticleMeta'

type Props = {
	articles?: TQTravelArticles['secret_blog'] | TQDevArticles['blog']
}
export const Articles = async ({ articles = [] }: Props) => {
    const type = articles[0] && isTravelArticle(articles[0]) ? 'travel' : 'dev'
    const Tag = type === 'dev' ? Masonry : 'ul'
    const ChildTag = type === 'dev' ? 'div' : 'li'
    const locale = await getLocale()
    const t = await getTranslations()
    const masonryProps = {
        breakpointCols: {
            default: 3,
            1679: 2,
            1023: 1
        },
        columnClassName: 'articles__column'
    }

    return <Tag
        className={`articles articles--${type}`}
        {...(type === 'dev' ? masonryProps : {})}
    >
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
    </Tag>
}

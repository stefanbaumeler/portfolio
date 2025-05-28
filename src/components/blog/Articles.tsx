import { TQDevArticles, TQTravelArticles } from '~/schema'
import { Teaser } from '@/components/blog/Teaser'
import { isTravelArticle } from '@/helpers/article-type'
import { Masonry } from '@/components/global/Masonry'

type Props = {
	articles?: TQTravelArticles['secret_blog'] | TQDevArticles['blog']
}
export const Articles = ({ articles = [] }: Props) => {
    const type = articles[0] && isTravelArticle(articles[0]) ? 'travel' : 'dev'
    const Tag = type === 'dev' ? Masonry : 'ul'
    const ChildTag = type === 'dev' ? 'div' : 'li'

    return <Tag
        className={`articles articles--${type}`}
        breakpointCols={{
            default: 3,
            1679: 2,
            1023: 1
        }}
        columnClassName="articles__column"
    >
        {articles.map((article, key) => <ChildTag
            className="articles__item"
            key={key}
        >
            <Teaser
                article={article}
                index={key}
            />
        </ChildTag>)}
    </Tag>
}

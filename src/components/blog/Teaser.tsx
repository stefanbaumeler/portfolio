import { Image } from '@/components/global/Image'
import { Link } from '@/components/global/Link'
import { TQDevArticles, TQTravelArticles } from '~/schema'
import { isTravelArticle } from '@/helpers/article-type'
import { ReactNode } from 'react'

type Props = {
	article: TQTravelArticles['secret_blog'][number] | TQDevArticles['blog'][number]
	index: number
    children: ReactNode
    sizes?: string
}
export const Teaser = ({
    article, index, children, sizes = '(max-width: 767px) 100vw, (max-width: 1023px) calc(100vw - 130px), (max-width: 1679px) calc(100vw - 180px), 1500px'
}: Props) => {
    const type = isTravelArticle(article) ? 'travel' : 'dev'

    return <Link
        prefetch
        href={`/blog/${type}/${article.slug}`}
        className={`teaser teaser--${type}`}
    >
        <div className="teaser__content">
            {isTravelArticle(article) ? null : <ul className="teaser__tags">
                {article.technology.map((technology, key) => <li
                    key={key}
                    className="teaser__tag"
                >
                    {`#${technology.technology_id.label}`}
                </li>
                )}
            </ul>}
            <h2
                className="teaser__title"
                dangerouslySetInnerHTML={{
                    __html: article.title
                }}
            />
            {isTravelArticle(article) ? null : <div className="teaser__text">
                {article.teaser_text}
            </div>}
            {children}
        </div>
        {isTravelArticle(article) && article.image ? <Image
            className="teaser__image"
            alt=""
            sizes={sizes}
            fill
            src={`${process.env.NEXT_PUBLIC_ASSETS}/${article.image.filename_disk}`}
            loading={index < 10 ? 'eager' : undefined}
            priority={index < 10}
            quality={75}
        /> : null}
    </Link>
}

import { Image } from '@/components/global/Image'
import { Link } from '@/components/global/Link'
import { TQDevArticles, TQTravelArticles } from '~/schema'
import { ArticleMeta } from '@/components/blog/ArticleMeta'
import { isTravelArticle } from '@/helpers/article-type'
import type { getTranslations } from 'next-intl/server'
import type { useTranslations } from 'next-intl'

type Props = {
	article: TQTravelArticles['secret_blog'][number] | TQDevArticles['blog'][number]
	index: number
    locale: string
    t: Awaited<ReturnType<typeof getTranslations>> | ReturnType<typeof useTranslations>
}
export const Teaser = ({
    article, index, locale, t
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
            <ArticleMeta
                className="teaser__meta"
                article={article}
                locale={locale}
                t={t}
            />
        </div>
        {isTravelArticle(article) && article.image ? <Image
            className="teaser__image"
            alt=""
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) calc(100vw - 130px), (max-width: 1679px) calc(100vw - 180px), 1500px"
            fill
            src={`${process.env.NEXT_PUBLIC_ASSETS}/${article.image.filename_disk}`}
            loading={index < 10 ? 'eager' : undefined}
            priority={index < 10}
            quality={75}
        /> : null}
    </Link>
}

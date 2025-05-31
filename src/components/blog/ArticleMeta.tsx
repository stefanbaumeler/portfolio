import { TBlogText, TQDevArticle, TQDevArticles, TQTravelArticle, TQTravelArticles } from '~/schema'
import Icon from '@mdi/react'
import * as Icons from '@mdi/js'
import { isTravelArticle } from '@/helpers/article-type'
import type { getTranslations } from 'next-intl/server'
import type { useTranslations } from 'next-intl'

type Props = {
	article: TQTravelArticles['secret_blog'][number] | TQDevArticles['blog'][number] | TQTravelArticle['secret_blog'][number] | TQDevArticle['blog'][number]
	className?: string
    locale: string
    t: Awaited<ReturnType<typeof getTranslations>> | ReturnType<typeof useTranslations>
}

export const ArticleMeta = ({
    article, className, t, locale
}: Props) => {
    const wordsPerMinute = 120

    const wordCount = article.elements?.filter((el) => el?.collection === 'blog_text').reduce((acc, el) => {
        const blogText = el?.item as TBlogText
        return acc + (blogText.text?.split(' ').length ?? 0)
    }, 0) ?? 0

    const readingTime = Math.ceil(wordCount / wordsPerMinute)
    const countries = isTravelArticle(article) ? [...new Set(article.place?.map((place) => place?.place_id?.country?.translations?.find((translation) => translation?.languages_code?.abbreviation === 'de')?.name))] : []
    const date = new Date(article.date_created).toLocaleString(locale, {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    })

    return <div className={className}>
        <div className="meta">
            <span className="meta__item">
                <Icon
                    path={Icons.mdiClockOutline}
                    className="meta__icon"
                />
                {`${readingTime} Min.`}
            </span>
            <span
                className="meta__separator"
                role="none"
            />
            <span className="meta__item">
                <Icon
                    path={Icons.mdiText}
                    className="meta__icon"
                />
                {`${wordCount.toLocaleString(locale === 'en' ? 'en-US' : 'de-CH')} ${t('words')}`}
            </span>
            {countries.length ? <>
                <span
                    className="meta__separator"
                    role="none"
                />
                <span className="meta__item">
                    <Icon
                        path={Icons.mdiMapMarker}
                        className="meta__icon"
                    />
                    {countries.map((country, key) => <span key={key}>
                        {`${country}${key === countries.length - 1 ? '' : ', '}`}
                    </span>)}
                </span>
            </> : null}
            <span
                className="meta__separator"
                role="none"
            />
            <span className="meta__item">
                <Icon
                    path={Icons.mdiCalendarOutline}
                    className="meta__icon"
                />
                {date}
            </span>
        </div>
    </div>
}

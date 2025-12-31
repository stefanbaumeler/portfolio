import { TBlogText, TQDevArticle, TQDevArticles, TQTravelArticle, TQTravelArticles } from '~/schema'
import Icon from '@mdi/react'
import * as Icons from '@mdi/js'
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

        return acc + parseInt(blogText.word_count ?? '0')
    }, 0) ?? 0

    const readingTime = Math.ceil(wordCount / wordsPerMinute)
    const date = new Date(article.date_created).toLocaleString(locale, {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    })

    return <div className={className}>
        <div className="meta">
            <span className="meta__item">
                <Icon
                    path={Icons.mdiCalendarOutline}
                    className="meta__icon"
                />
                {date}
            </span>
            <span
                className="meta__separator"
                role="none"
            />
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
        </div>
    </div>
}

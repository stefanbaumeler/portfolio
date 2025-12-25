import { TQMap, TQTravelArticles } from '~/schema'
import { dt } from '@/helpers/translate'
import { useLocale, useTranslations } from 'next-intl'
import { Teaser } from '@/components/blog/Teaser'
import { ArticleMeta } from '@/components/blog/ArticleMeta'
import { Drawer } from '@/components/map/Drawer'

type Props = {
    activePlace?: TQMap['place'][number] & { visits: Date[][]}
    articles?: TQTravelArticles['secret_blog']
    onClose: () => void
}

export const PlaceDrawer = ({
    activePlace, onClose, articles = []
}: Props) => {
    const locale = useLocale()
    const t = useTranslations()
    const articlesOfPlace = articles.filter((article) => {
        return article.place.find((place) => place.place_id.id === activePlace?.id)
    })

    return activePlace ? <Drawer
        onClose={onClose}
        activeObject={activePlace}
        title={dt(activePlace, 'name', locale)}
        subtitle={dt(activePlace?.country, 'name', locale)}
    >
        <div className="drawer__content">
            <div className="visits">
                <h3 className="visits__title">
                    {t('Visits')}
                </h3>
                <ul className="visits__list">
                    {activePlace.visits?.map(([arrival, departure], k) => <li
                        key={k}
                        className="visits__item"
                    >
                        <span className="visits__date">
                            {
                                arrival?.toString() === 'Invalid Date' ? '' : arrival?.toLocaleString(locale, {
                                    year: 'numeric',
                                    month: 'short',
                                    day: '2-digit'
                                })
                            }
                        </span>
                        <span>
                        –
                        </span>
                        <span className="visits__date">
                            {
                                departure?.toString() === 'Invalid Date' || !departure ? t('present') : departure?.toLocaleString(locale, {
                                    year: 'numeric',
                                    month: 'short',
                                    day: '2-digit'
                                })
                            }
                        </span>
                    </li>)}
                </ul>
            </div>
            {articlesOfPlace.length ? <>
                <h3 className="drawer__subtitle">
                    {t('Stories')}
                </h3>
                <div className="drawer__stories">
                    <ul>
                        {articlesOfPlace.map((article, k) => <li key={k}>
                            <Teaser
                                index={k}
                                article={article}
                                sizes="(min-width: 0px) 400px"
                            >
                                <ArticleMeta
                                    className="teaser__meta"
                                    article={article}
                                    locale={locale}
                                    t={t}
                                />
                            </Teaser>
                        </li>)}
                    </ul>
                </div>
            </> : null}
        </div>
    </Drawer> : null
}

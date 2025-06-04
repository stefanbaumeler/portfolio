import { TQMap, TQTravelArticles } from '~/schema'
import { dt } from '@/helpers/translate'
import { useLocale, useTranslations } from 'next-intl'
import { Teaser } from '@/components/blog/Teaser'
import { recursivelyCleanDaytrips } from '@/helpers/clean-daytrips'
import { ArticleMeta } from '@/components/blog/ArticleMeta'
import { Drawer } from '@/components/map/Drawer'

type Props = {
    transportation: TQMap['transportation']
    activePlace?: TQMap['place'][number]
    articles?: TQTravelArticles['secret_blog']
    onClose: () => void
}

export const PlaceDrawer = ({
    activePlace, transportation, onClose, articles = []
}: Props) => {
    const locale = useLocale()
    const t = useTranslations()

    const arrivals = transportation.filter((transport) => {
        return transport.to.id === activePlace?.id
    })

    const departures = transportation.filter((transport) => {
        return transport.from.id === activePlace?.id
    })

    const articlesOfPlace = articles.filter((article) => {
        return article.place.find((place) => place.place_id.id === activePlace?.id)
    })

    const rawVisits = arrivals.map((arrival) => {
        const departure = departures
            .filter((departure) => +new Date(arrival.arrival) - +new Date(departure.departure) <= 0)
            .sort((a, b) => +new Date(a.departure) - +new Date(b.departure))[0]

        return [new Date(arrival.arrival), new Date(departure?.departure)]
    }).sort((a, b) => +(a[0] ?? 0) - +(b[0] ?? 0))

    const visits = recursivelyCleanDaytrips(rawVisits as [Date, Date][])

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
                    {visits?.map(([arrival, departure], k) => <li
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
                                departure?.toString() === 'Invalid Date' ? t('present') : departure?.toLocaleString(locale, {
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

import { TouchEvent, useEffect, useRef, useState } from 'react'
import { TQMap, TQTravelArticles } from '~/schema'
import { dt } from '@/helpers/translate'
import { useLocale, useTranslations } from 'next-intl'
import { Teaser } from '@/components/blog/Teaser'
import Icon from '@mdi/react'
import { mdiClose } from '@mdi/js'
import { recursivelyCleanDaytrips } from '@/helpers/clean-daytrips'
import { useBodyContext } from '@/context/body'
import { ArticleMeta } from '@/components/blog/ArticleMeta'

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
    const [active, setActive] = useState(false)
    const [big, setBig] = useState(false)
    const [startDrag, setStartDrag] = useState(0)
    const [offset, setOffset] = useState(0)
    const [animated, setAnimated] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const drawerEl = useRef<HTMLDivElement>(null)
    const [drawerActiveHeight, setDrawerActiveHeight] = useState(0)
    const { setFixed } = useBodyContext()

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

    useEffect(() => {
        if (activePlace) {
            if (isMobile) {
                setFixed(true)
            }

            setTimeout(() => {
                setAnimated(true)
                setActive(true)
            }, 10)

            setTimeout(() => {
                setAnimated(false)
            }, 260)
        }

        const naturalHeight = drawerEl.current?.clientHeight ?? 0
        const maxHeight = window.innerHeight / 2
        let height = naturalHeight

        if (naturalHeight > maxHeight) {
            height = maxHeight
        }
        setDrawerActiveHeight(height)
    }, [activePlace])

    useEffect(() => {
        const callback = () => {
            setIsMobile(window.innerWidth < 768)
        }
        window.addEventListener('resize', callback)

        callback()

        return () => window.removeEventListener('resize', callback)
    }, [])

    const close = () => {
        setActive(false)
        setBig(false)
        setAnimated(true)

        if (isMobile) {
            setFixed(false)
        }

        setTimeout(() => {
            setAnimated(false)
            onClose()
        }, 250)
    }

    const onTouchStart = (event: TouchEvent) => {
        if (isMobile) {
            setStartDrag(event.touches[0]?.clientY ?? 0)
        }
    }

    const onTouchMove = (event: TouchEvent) => {
        if (isMobile) {
            const newOffset = (event.touches[0]?.clientY ?? 0) - startDrag
            if (drawerEl.current?.scrollTop === 0) {
                if ((drawerEl.current?.getBoundingClientRect().bottom ?? 0) - 100 > window.innerHeight) {
                    setOffset(newOffset)
                } else {
                    setOffset(Math.max(0, newOffset))
                }
            }
        }
    }

    const onTouchEnd = () => {
        if (!isMobile) {
            return
        }

        if (offset > 10) {
            close()

            setTimeout(() => {
                setOffset(0)
            }, 250)
        }

        if (offset < -10 && drawerEl.current?.scrollTop === 0) {
            setAnimated(true)
            setOffset(0)
            setBig(true)

            setTimeout(() => {
                setAnimated(false)
                setOffset(0)
            }, 250)
        }
    }

    return <div
        className={`drawer${active ? ' drawer--active' : ''}${big ? ' drawer--big' : ''}${animated ? ' drawer--animated' : ''}`}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        ref={drawerEl}
        style={{
            translate: `${isMobile ? `0 calc(100svh - ${active ? drawerActiveHeight : 0}px + ${big ? -50 : 0}svh + ${big ? 100 : 0}px + ${!big || offset > 0 ? offset : 0}px)` : ''}`
        }}
    >
        <div className="drawer__header">
            <button
                className="drawer__close"
                onClick={close}
            >
                <Icon path={mdiClose} />
            </button>
            <h2 className="drawer__title">
                {dt(activePlace, 'name', locale)}
            </h2>
            <span className="drawer__country">
                {dt(activePlace?.country, 'name', locale)}
            </span>
        </div>
        <div className="drawer__content">
            <div className="drawer__visits">
                <h3 className="drawer__subtitle">
                    {t('Visits')}
                </h3>
                {visits?.map(([arrival, departure], k) => <div
                    key={k}
                    className="drawer__visit"
                >
                    <span className="drawer__visit-date">
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
                    <span className="drawer__visit-date">
                        {
                            departure?.toString() === 'Invalid Date' ? t('present') : departure?.toLocaleString(locale, {
                                year: 'numeric',
                                month: 'short',
                                day: '2-digit'
                            })
                        }
                    </span>
                </div>)}
            </div>
            {articlesOfPlace.length ? <>
                <h3 className="drawer__subtitle">
                    {t('Stories')}
                </h3>
                <div className="drawer__stories">
                    {articlesOfPlace.map((article, k) => <Teaser
                        index={k}
                        article={article}
                        key={k}
                        sizes="(min-width: 0px) 400px"
                    >
                        <ArticleMeta
                            className="teaser__meta"
                            article={article}
                            locale={locale}
                            t={t}
                        />
                    </Teaser>)}
                </div>
            </> : null}
        </div>
    </div>
}

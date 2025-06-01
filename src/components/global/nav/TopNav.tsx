'use client'

import * as Icons from '@mdi/js'
import Icon from '@mdi/react'
import { Tooltip } from '../Tooltip'
import { DarkMode, useDarkContext } from '@/context/dark'
import { useTopNavContext } from '@/context/top-nav'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname } from '@/i18n/routing'
import { Link } from '@/components/global/Link'
import { useEffect, useState } from 'react'
import { Placement } from '@floating-ui/react'

export const TopNav = () => {
    const dark = useDarkContext()
    const topNavContext = useTopNavContext()
    const t = useTranslations()
    const pathname = usePathname()
    const locale = useLocale()
    const [tooltipPlacement, setTooltipPlacement] = useState<Placement>('bottom')

    useEffect(() => {
        const callback = () => {
            setTooltipPlacement(window.innerWidth < 768 ? 'top' : 'bottom')
        }
        window.addEventListener('resize', callback)

        callback()

        return () => window.removeEventListener('resize', callback)
    }, [])

    return <div className="top-nav">
        {topNavContext.title ? <h1 className="top-nav__title">
            {topNavContext.title}
        </h1> : null}
        <nav className="top-nav__nav">
            {topNavContext.back ? <div className="top-nav__section">
                <Tooltip
                    content={t('Back')}
                    placement="bottom"
                    tooltipClass="top-nav__tooltip"
                    className="top-nav__item"
                >
                    <Link
                        prefetch
                        href={topNavContext.back}
                        skipLanguage
                        className="top-nav__button top-nav__button--back"
                        aria-label={t('Back')}
                    >
                        <Icon
                            path={Icons.mdiArrowLeft}
                            className="top-nav__icon"
                        />
                    </Link>
                </Tooltip>
            </div> : null}
            <div className="top-nav__section">
                <Tooltip
                    content={t('Dark mode')}
                    placement={tooltipPlacement}
                    tooltipClass="top-nav__tooltip"
                    className="top-nav__item"
                >
                    <button
                        className="top-nav__button"
                        aria-label={t('Dark mode')}
                        onClick={() => dark.setState(dark.state === DarkMode.Dark ? DarkMode.Light : DarkMode.Dark)}
                    >
                        <Icon
                            path={dark.state ? Icons.mdiWhiteBalanceSunny : Icons.mdiMoonWaningCrescent}
                            className="top-nav__icon"
                        />
                    </button>
                </Tooltip>
                <Tooltip
                    content={t('Language')}
                    placement={tooltipPlacement}
                    tooltipClass="top-nav__tooltip"
                    className="top-nav__item"
                >
                    <Link
                        prefetch={!pathname.endsWith('/stats')}
                        aria-label={t('Language')}
                        skipLanguage
                        className="top-nav__button"
                        href={`/${locale === 'de' ? 'en' : 'de'}${pathname}`}
                    >
                        <Icon
                            path={Icons.mdiTranslate}
                            className="top-nav__icon"
                        />
                    </Link>
                </Tooltip>
            </div>
        </nav>
    </div>
}

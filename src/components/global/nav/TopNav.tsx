'use client'

import * as Icons from '@mdi/js'
import Icon from '@mdi/react'
import { Tooltip } from '../Tooltip'
import { DarkMode, useDarkContext } from '@/context/dark'
import { useTopNavContext } from '@/context/top-nav'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname } from '@/i18n/routing'
import { Link } from '@/components/global/Link'

export const TopNav = () => {
    const dark = useDarkContext()
    const topNavContext = useTopNavContext()
    const t = useTranslations()
    const pathname = usePathname()
    const locale = useLocale()

    return <div className={`top-nav${topNavContext.forceWhite ? ' top-nav--force-white' : ''}`}>
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
                        skipLanguage={true}
                        className="top-nav__button"
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
                    placement="bottom"
                    tooltipClass="top-nav__tooltip"
                    className="top-nav__item"
                >
                    <button
                        className="top-nav__button"
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
                    placement="bottom"
                    tooltipClass="top-nav__tooltip"
                    className="top-nav__item"
                >
                    <Link
                        prefetch={!pathname.endsWith('/stats')}
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

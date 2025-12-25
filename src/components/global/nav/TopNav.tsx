'use client'

import * as Icons from '@mdi/js'
import Icon from '@mdi/react'
import { Tooltip } from '../Tooltip'
import { useTopNavContext } from '@/context/top-nav'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname } from '@/i18n/routing'
import { Link } from '@/components/global/Link'
import { useBodyContext } from '@/context/body'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export const TopNav = () => {
    const theme = useTheme()
    const topNavContext = useTopNavContext()
    const t = useTranslations()
    const pathname = usePathname()
    const locale = useLocale()
    const { isMobile } = useBodyContext()
    const [darkModeIcon, setDarkModeIcon] = useState<string>(Icons.mdiDotsHorizontal)

    useEffect(() => {
        setDarkModeIcon(theme.resolvedTheme === 'dark' ? Icons.mdiWeatherNight : Icons.mdiWeatherSunny)
    }, [theme.resolvedTheme])

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
                        <div className="top-nav__icon-container">
                            <Icon
                                path={Icons.mdiArrowLeft}
                                className="top-nav__icon"
                            />
                            <Icon
                                path={Icons.mdiArrowLeft}
                                className="top-nav__icon top-nav__icon--hover"
                            />
                        </div>
                    </Link>
                </Tooltip>
            </div> : null}
            <div className="top-nav__section">
                <Tooltip
                    content={t('Dark mode')}
                    placement={isMobile ? 'top' : 'bottom'}
                    tooltipClass="top-nav__tooltip"
                    className="top-nav__item"
                >
                    <button
                        className="top-nav__button top-nav__button--dark"
                        aria-label={t('Dark mode')}
                        onClick={() => theme.setTheme(theme.resolvedTheme === 'dark' ? 'light' : 'dark')}
                    >
                        <Icon
                            path={darkModeIcon}
                            className="top-nav__icon"
                        />
                    </button>
                </Tooltip>
                <Tooltip
                    content={t('Language')}
                    placement={isMobile ? 'top' : 'bottom'}
                    tooltipClass="top-nav__tooltip"
                    className="top-nav__item"
                >
                    <Link
                        prefetch={!pathname.endsWith('/stats') && !pathname.endsWith('/map')}
                        aria-label={t('Language')}
                        skipLanguage
                        className="top-nav__button top-nav__button--language"
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

'use client'

import { Link } from '../Link'
import { usePathname } from 'next/navigation'
import { useNavContext } from '@/context/nav'
import { useBodyContext } from '@/context/body'
import { Tooltip } from '@/components/global/Tooltip'
import Icon from '@mdi/react'

type Props = {
	item: {
        icon?: string
        url?: string
        label?: string
        title?: string
    }
    type: 'socials' | 'main'
}
export const NavItem = ({
    item, type
}: Props) => {
    const path = usePathname()
    const { setActive } = useNavContext()
    const { isMobile } = useBodyContext()

    const isHome = item.url === '/'

    return isHome || type === 'main' ? <li className="nav__item">
        {isHome ? <Link
            prefetch
            href={item.url ?? '#'}
            className="nav__logo"
            onClick={() => setActive(false)}
        >
                SB
        </Link> : <Link
            prefetch={!item.url?.endsWith('/stats')}
            href={item.url ?? '#'}
            className={`nav__link${item.url && path.includes(item.url) ? ' nav__link--active' : ''}`}
            aria-label={item.label}
            onAfterRouteChange={() => setActive(false)}
        >
            <div className="nav__label-container">
                <div
                    className="nav__label"
                    data-text={item.label}
                >
                    {item.label}
                </div>
            </div>
        </Link>}
    </li> : <Tooltip
        content={item.label}
        placement={isMobile ? 'bottom' : 'right'}
        className="nav__item"
        tagName="li"
        tooltipClass="nav__tooltip"
    >
        <Link
            prefetch={!item.url?.endsWith('/stats')}
            href={item.url ?? '#'}
            target="_blank"
            className={`nav__link${item.url === path ? ' nav__link--active' : ''}`}
            title={item.title ?? item.label}
            aria-label={item.label}
            onAfterRouteChange={() => setActive(false)}
        >
            {item.icon ? <Icon
                path={item.icon}
                className="nav__icon"
            /> : null}
        </Link>
    </Tooltip>
}

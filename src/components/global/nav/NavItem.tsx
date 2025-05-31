'use client'

import Icon from '@mdi/react'
import { Link } from '../Link'
import { Tooltip } from '../Tooltip'
import { usePathname } from 'next/navigation'
import { useNavContext } from '@/context/nav'
import { useEffect, useState } from 'react'
import { Placement } from '@floating-ui/react'

type Props = {
	item: {
        icon?: string
        url?: string
        label?: string
        title?: string
        line: boolean
    }
}
export const NavItem = ({ item }: Props) => {
    const path = usePathname()
    const { setActive } = useNavContext()
    const [tooltipPlacement, setTooltipPlacement] = useState<Placement>('right')

    const isHome = item.url === '/'

    useEffect(() => {
        const callback = () => {
            setTooltipPlacement(window.innerWidth < 768 ? 'bottom' : 'right')
        }
        window.addEventListener('resize', callback)

        callback()

        return () => window.removeEventListener('resize', callback)
    }, [])

    return <Tooltip
        content={item.label}
        placement={tooltipPlacement}
        className={`nav__item${item.line ? ' nav__item--line' : ''}`}
        tagName="li"
        tooltipClass="nav__tooltip"
    >
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
            className={`nav__link${item.url === path ? ' nav__link--active' : ''}`}
            title={item.title ?? item.label}
            aria-label={item.label}
            onClick={() => setActive(false)}
        >
            {item.icon ? <Icon
                path={item.icon}
                className="nav__icon"
            /> : null}
            <span className="nav__label">
                {item.label}
            </span>
        </Link>}
    </Tooltip>
}

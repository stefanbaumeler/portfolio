import Icon from '@mdi/react'
import Link from 'next/link'
import type { TNavItem } from './Nav'
import { Tooltip } from './Tooltip'
import { usePathname } from 'next/navigation'

type Props = {
	item: TNavItem
}
export const NavItem = ({ item }: Props) => {
    const path = usePathname()

    return <Tooltip
        label={item.label}
        placement="right"
        className={`nav__item${item.line ? ' nav__item--line' : ''}`}
        tagName="li"
        tooltipClass="nav__tooltip"
    >
        <Link
            prefetch={true}
            href={item.url}
            className={`nav__link${item.url === path ? ' nav__link--active' : ''}`}
            title={item.title ?? item.label}
            aria-label={item.label}
        >
            <Icon
                path={item.icon}
                className="nav__icon"
            />
        </Link>
    </Tooltip>
}

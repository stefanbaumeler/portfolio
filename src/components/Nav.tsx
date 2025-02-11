import * as Icons from '@mdi/js'
import Link from 'next/link'
import { NavItem } from './NavItem'
import { Tooltip } from './Tooltip'

export type TNavItem = {
	icon: string
	url: string
	label: string
	title?: string
	line?: boolean
}

const navItems: TNavItem[] = [
    {
        icon: Icons.mdiPencilRuler,
        url: '/projects',
        label: 'Projects'
    },
    {
        icon: Icons.mdiLightbulbOnOutline,
        url: '/skills',
        label: 'Skills'
    },
    {
        icon: Icons.mdiNewspaper,
        url: '/blog',
        label: 'Blog',
        line: true
    },
    {
        icon: Icons.mdiEarth,
        url: '/map',
        label: 'Map'
    },
    {
        icon: Icons.mdiChartTimelineVariantShimmer,
        url: '/stats',
        label: 'Statistics'
    },
    {
        icon: Icons.mdiTimelineOutline,
        url: '/timeline',
        label: 'Timeline'
    }
]

const socials: TNavItem[] = [
    {
        icon: Icons.mdiLinkedin,
        url: 'https://www.linkedin.com/in/stefan-baumeler/',
        title: 'Stefan Baumeler on LinkedIn',
        label: 'LinkedIn'
    },
    {
        icon: Icons.mdiGithub,
        url: 'https://github.com/stefanbaumeler',
        title: 'Stefan Baumeler on GitHub',
        label: 'GitHub'
    },
    {
        icon: Icons.mdiAt,
        url: 'mailto:stefan.baumeler@hotmail.com',
        label: 'Send me a message'
    }
]

export const Nav = () => {
    return <nav className="nav">
        <div className="nav__container">
            <Tooltip
                label="Home"
                placement="right"
                tooltipClass="nav__tooltip"
            >
                <Link
                    prefetch={true}
                    href="/"
                    className="nav__logo"
                >
				SB
                </Link>
            </Tooltip>
            <div className="nav__lists">
                {[navItems, socials].map((group, k) => <ul
                    key={`nav-list-${k}`}
                    className="nav__list"
                >
                    {group.map((item, key) => <NavItem
                        item={item}
                        key={key}
                    />)}
                </ul>)}
            </div>
        </div>
    </nav>
}

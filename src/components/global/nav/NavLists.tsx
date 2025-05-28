import * as Icons from '@mdi/js'
import { NavItem } from './NavItem'
import { getClient } from '@/gql/urql'
import { QNavigationDocument, TQNavigation } from '~/schema'
import { getLocale } from 'next-intl/server'
import { dt } from '@/helpers/translate'

export const NavLists = async () => {
    const locale = await getLocale()
    const { data } = await getClient().query<TQNavigation>(QNavigationDocument, {})
    const I = Icons as { [key: string]: string }

    const getItems = (item: TQNavigation['navigation']['main_navigation_items'][number]) => ({
        icon: item?.icon ? I[item.icon] : '',
        url: item?.url ?? '',
        label: dt(item, 'label', locale),
        title: dt(item, 'title', locale),
        line: item?.line ?? false
    })

    const navItems = data?.navigation?.main_navigation_items.map(getItems) ?? []
    const socials = data?.navigation?.misc_navigation_items.map(getItems) ?? []

    return <div className="nav__lists">
        {[navItems, socials].map((group, k) => <ul
            key={`nav-list-${k}`}
            className={`nav__list${k === 1 ? ' nav__list--socials' : ''}`}
        >
            {group.map((item, key) => <NavItem
                item={item}
                key={key}
            />)}
        </ul>)}
    </div>
}

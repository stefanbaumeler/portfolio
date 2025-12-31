'use client'

import { useNavContext } from '@/context/nav'
import { ReactNode, useState } from 'react'
import { useOnScroll } from '@/helpers/scroll'
import { useTranslations } from 'next-intl'

type Props = {
    children: ReactNode
}

export const Nav = ({ children }: Props) => {
    const [toggleHidden, setToggleHidden] = useState(false)
    const [scrollPos, setScrollPos] = useState(0)
    const t = useTranslations()

    const {
        active, setActive
    } = useNavContext()

    useOnScroll(() => {
        setToggleHidden(window.scrollY > scrollPos && window.scrollY > 0)
        setScrollPos(window.scrollY)
    })

    return <nav className={`nav${active ? ' nav--active' : ''}`}>
        <button
            className={`nav__toggle${toggleHidden ? ' nav__toggle--hidden' : ''}`}
            aria-label={t('Open Navigation')}
            onClick={() => setActive(!active)}
        >
            <span className="nav__toggle-icon" />
        </button>
        <div className="nav__container">
            {children}
        </div>
    </nav>
}

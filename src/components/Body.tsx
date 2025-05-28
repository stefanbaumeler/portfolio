'use client'

import { ReactNode } from 'react'
import { DarkMode, useDarkContext } from '@/context/dark'
import { useUAContext } from '@/context/ua'
import { useNavContext } from '@/context/nav'

type Props = {
    children: ReactNode
}

export const Body = ({ children }: Props) => {
    const { state } = useDarkContext()
    const { browser } = useUAContext()
    const { active } = useNavContext()

    return <body className={`body body--${browser} body--${state === DarkMode.Dark ? 'dark' : 'light'}${active ? ' body--fixed' : ''}`}>
        {children}
    </body>
}

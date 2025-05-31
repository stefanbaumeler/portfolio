'use client'

import { ReactNode } from 'react'
import { DarkMode, useDarkContext } from '@/context/dark'
import { useUAContext } from '@/context/ua'
import { useBodyContext } from '@/context/body'

type Props = {
    children: ReactNode
}

export const Body = ({ children }: Props) => {
    const { state } = useDarkContext()
    const { browser } = useUAContext()
    const { fixed } = useBodyContext()

    return <body className={`body body--${browser} body--${state === DarkMode.Dark ? 'dark' : 'light'}${fixed ? ' body--fixed' : ''}`}>
        <meta
            name="theme-color"
            content={state === DarkMode.Dark ? '#111111' : '#FAFAFA'}
        />
        {children}
    </body>
}

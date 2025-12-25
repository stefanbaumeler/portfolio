'use client'

import { ReactNode } from 'react'
import { useUAContext } from '@/context/ua'
import { useBodyContext } from '@/context/body'

type Props = {
    children: ReactNode
}

export const Body = ({ children }: Props) => {
    const { browser } = useUAContext()
    const { fixed } = useBodyContext()

    return <body className={`body body--${browser}${fixed ? ' body--fixed' : ''}`}>
        {children}
    </body>
}

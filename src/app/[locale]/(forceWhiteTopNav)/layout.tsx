'use client'

import { ReactNode, useEffect } from 'react'
import { useTopNavContext } from '@/context/top-nav'

const ForceWhiteTopNavLayout = ({ children }: { children: ReactNode }) => {
    const topNavContext = useTopNavContext()

    useEffect(() => {
        topNavContext.setForceWhite(true)

        return () => {
            topNavContext.setForceWhite(false)
        }
    }, [topNavContext])

    return <>
        {children}
    </>
}

export default ForceWhiteTopNavLayout

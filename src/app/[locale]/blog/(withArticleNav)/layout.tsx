'use client'

import { ReactNode, useEffect } from 'react'
import { ScrollProvider } from '@/context/scroll'
import { useTopNavContext } from '@/context/top-nav'

const ArticleLayout = ({ children }: { children: ReactNode }) => {
    const topNavContext = useTopNavContext()

    useEffect(() => {
        topNavContext.setBack(window.location.pathname.split('/').slice(0, -1).join('/'))

        return () => {
            topNavContext.setBack('')
        }
    }, [topNavContext])

    return <ScrollProvider>
        {children}
    </ScrollProvider>
}

export default ArticleLayout

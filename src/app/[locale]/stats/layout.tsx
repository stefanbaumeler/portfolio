'use client'

import { ReactNode, useEffect } from 'react'
import { ChartProvider } from '@/context/chart'
import { useTopNavContext } from '@/context/top-nav'

const StatsLayout = ({ children }: { children: ReactNode }) => {
    const topNavContext = useTopNavContext()

    useEffect(() => {
        topNavContext.setTitle('Statistics')

        return () => {
            topNavContext.setTitle('')
        }
    }, [topNavContext])

    return <ChartProvider>
        {children}
    </ChartProvider>
}

export default StatsLayout

'use client'

import { Map } from '@/components/Map'
import { useTopNavContext } from '@/context/top-nav'
import { useEffect } from 'react'

const MapPage = () => {
    const topNavContext = useTopNavContext()

    useEffect(() => {
        topNavContext.setTitle('Map')

        return () => {
            topNavContext.setTitle('')
        }
    }, [topNavContext])

    return <Map />
}

export default MapPage

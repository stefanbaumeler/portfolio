'use client'

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useOnResize } from '@/helpers/resize'

type Props = {
    children?: ReactNode
}

interface BodyContext {
    fixed: boolean
    setFixed: Dispatch<SetStateAction<boolean>>
    isMobile: boolean
}

const BodyContext = createContext<BodyContext | null>(null)

const BodyProvider = ({ children }: Props) => {
    const pathname = usePathname()
    const [fixed, setFixed] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useOnResize(() => {
        setIsMobile(window.innerWidth < 768)
    }, true)

    useEffect(() => {
        setFixed(false)
    }, [pathname])

    return <BodyContext.Provider value={{
        fixed,
        setFixed,
        isMobile
    }}
    >
        {children}
    </BodyContext.Provider>
}

const useBodyContext = () => {
    const ctx = useContext(BodyContext)

    if (!ctx) {
        throw new Error('Context not defined')
    }

    return ctx
}

export {
    BodyProvider, useBodyContext
}

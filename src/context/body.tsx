'use client'

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

type Props = {
    children?: ReactNode
}

interface BodyContext {
    fixed: boolean
    setFixed: Dispatch<SetStateAction<boolean>>
}

const BodyContext = createContext<BodyContext | null>(null)

const BodyProvider = ({ children }: Props) => {
    const pathname = usePathname()
    const [fixed, setFixed] = useState(false)

    useEffect(() => {
        setFixed(false)
    }, [pathname])

    return <BodyContext.Provider value={{
        fixed,
        setFixed
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

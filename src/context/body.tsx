'use client'

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'

type Props = {
    children?: ReactNode
}

interface BodyContext {
    fixed: boolean
    setFixed: Dispatch<SetStateAction<boolean>>
}

const BodyContext = createContext<BodyContext | null>(null)

const BodyProvider = ({ children }: Props) => {
    const [fixed, setFixed] = useState(false)

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

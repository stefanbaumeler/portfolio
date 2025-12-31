'use client'

import { createContext, ReactNode, useContext, useState } from 'react'
import { useBodyContext } from '@/context/body'

type Props = {
    children?: ReactNode
}

interface INavContext {
    active: boolean
    setActive: (state: boolean) => void
}

const NavContext = createContext<INavContext | null>(null)

const NavProvider = ({ children }: Props) => {
    const [active, setActive] = useState(false)
    const { setFixed } = useBodyContext()

    return <NavContext.Provider value={{
        active,
        setActive: (state) => {
            setActive(state)
            setFixed(state)
        }
    }}
    >
        {children}
    </NavContext.Provider>
}

const useNavContext = () => {
    const ctx = useContext(NavContext)

    if (!ctx) {
        throw new Error('Context not defined')
    }

    return ctx
}

export {
    NavProvider, useNavContext
}

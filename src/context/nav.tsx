'use client'

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'

type Props = {
	children?: ReactNode
}

interface NavContext {
	active: boolean
	setActive: Dispatch<SetStateAction<boolean>>
}

const NavContext = createContext<NavContext | null>(null)

const NavProvider = ({ children }: Props) => {
    const [active, setActive] = useState(false)

    return <NavContext.Provider value={{
        active,
        setActive
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

'use client'

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'

type Props = {
	children?: ReactNode
}

interface TopNavContext {
	back: string
	setBack: Dispatch<SetStateAction<string>>
    forceWhite: boolean
    setForceWhite: Dispatch<SetStateAction<boolean>>
	title: string
	setTitle: Dispatch<SetStateAction<string>>
}

const TopNavContext = createContext<TopNavContext | null>(null)

const TopNavProvider = ({ children }: Props) => {
    const [back, setBack] = useState('')
    const [title, setTitle] = useState('')
    const [forceWhite, setForceWhite] = useState(false)

    return <TopNavContext.Provider value={{
        back,
        setBack,
        forceWhite,
        setForceWhite,
        title,
        setTitle
    }}
    >
        {children}
    </TopNavContext.Provider>
}

const useTopNavContext = () => {
    const ctx = useContext(TopNavContext)

    if (!ctx) {
        throw new Error('Context not defined')
    }

    return ctx
}

export {
    TopNavProvider, useTopNavContext
}

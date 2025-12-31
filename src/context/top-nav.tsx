'use client'

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'

type Props = {
    children?: ReactNode
}

interface ITopNavContext {
    back: string
    setBack: Dispatch<SetStateAction<string>>
    title: string
    setTitle: Dispatch<SetStateAction<string>>
}

const TopNavContext = createContext<ITopNavContext | null>(null)

const TopNavProvider = ({ children }: Props) => {
    const [back, setBack] = useState('')
    const [title, setTitle] = useState('')

    return <TopNavContext.Provider value={{
        back,
        setBack,
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

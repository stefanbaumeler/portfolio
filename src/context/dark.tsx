'use client'

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react'

type Props = {
    children?: ReactNode
    initialTheme?: string
}

enum DarkMode {
    Dark = 'dark',
    Light = 'light'
}

interface IDarkContext {
    state: DarkMode
    setState: Dispatch<SetStateAction<DarkMode>>
}

const DarkContext = createContext<IDarkContext | null>(null)

const DarkProvider = ({
    children, initialTheme
}: Props) => {
    const [state, setState] = useState<DarkMode>(initialTheme as DarkMode ?? DarkMode.Light)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const defaultPreference = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? DarkMode.Dark : DarkMode.Light
            const stateFromLocalStorage = typeof localStorage === 'undefined' ? undefined : localStorage.getItem('color-mode')
            const defaultMode = stateFromLocalStorage ?? defaultPreference
            setState(defaultMode as DarkMode)
        }
    }, [])

    useEffect(() => {
        if (state) {
            localStorage.setItem('color-mode', state)
        }
    }, [state])

    return <DarkContext.Provider value={{
        state,
        setState
    }}
    >
        {children}
    </DarkContext.Provider>
}

const useDarkContext = () => {
    const ctx = useContext(DarkContext)

    if (!ctx) {
        throw new Error('Context not defined')
    }

    return ctx
}

export {
    DarkProvider, useDarkContext, DarkMode
}

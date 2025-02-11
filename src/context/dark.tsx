import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'

type Props = {
	children?: ReactNode
}

enum DarkMode {
	Dark = 'dark',
	Light = 'light'
}

interface DarkContext {
	state: DarkMode
	setState: Dispatch<SetStateAction<DarkMode>>
}

const DarkContext = createContext<DarkContext | null>(null)

const DarkProvider = ({ children }: Props) => {
    const [state, setState] = useState(DarkMode.Light)

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

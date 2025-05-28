'use client'

import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import UAParser from 'ua-parser-js'

type Props = {
    children?: ReactNode
}

interface IUAContext {
    browser: string
}

const UAContext = createContext<IUAContext | null>(null)

const UAProvider = ({ children }: Props) => {
    const [browser, setBrowser] = useState('loading')

    useEffect(() => {
        const uaParser = new UAParser()
        const parsedUa = uaParser.getResult()

        setBrowser(parsedUa.browser.name?.split(' ').join('-').toLowerCase() || 'loading')
    }, [])

    return <UAContext.Provider value={{
        browser
    }}
    >
        {children}
    </UAContext.Provider>
}

const useUAContext = () => {
    const ctx = useContext(UAContext)

    if (!ctx) {
        throw new Error('Context not defined')
    }

    return ctx
}

export {
    UAProvider, useUAContext
}

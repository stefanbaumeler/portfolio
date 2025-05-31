'use client'

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'

type Props = {
    children?: ReactNode
}

interface BodyContext {
    images: string[]
    active: string
    prev: () => void
    next: () => void
    setActive: Dispatch<SetStateAction<string>>
    addImage: (image: string) => void
}

const BodyContext = createContext<BodyContext | null>(null)

const BodyProvider = ({ children }: Props) => {
    const [images, setImages] = useState<string[]>([])
    const [active, setActive] = useState('')

    return <BodyContext.Provider value={{
        images,
        active,
        setActive,
        prev,
        next,
        addImage
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

'use client'

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'

type Props = {
    children?: ReactNode
}

interface ISliderContext {
    images: string[]
    active: string
    prev: () => void
    next: () => void
    setActive: Dispatch<SetStateAction<string>>
    addImage: (image: string) => void
}

const SliderContext = createContext<ISliderContext | null>(null)

const SliderProvider = ({ children }: Props) => {
    const [images, setImages] = useState<string[]>([])
    const [active, setActive] = useState('')

    const addImage = (image: string) => {
        setImages((p) => [...p, image])
    }

    const prev = () => {
        const current = images.indexOf(active)
        const future = images[current === 0 ? images.length - 1 : current - 1]

        if (future) {
            setActive(future)
        }
    }

    const next = () => {
        const current = images.indexOf(active)
        const future = images[current === images.length - 1 ? 0 : current + 1]

        if (future) {
            setActive(future)
        }
    }

    return <SliderContext.Provider value={{
        images,
        active,
        setActive,
        prev,
        next,
        addImage
    }}
    >
        {children}
    </SliderContext.Provider>
}

const useSliderContext = () => {
    const ctx = useContext(SliderContext)

    if (!ctx) {
        throw new Error('Context not defined')
    }

    return ctx
}

export {
    SliderProvider, useSliderContext
}

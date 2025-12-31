import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

type Props = {
    children?: ReactNode
}

type Bid = {
    id: string
    offset: number
    direction: number
}

interface IScrollContext {
    bids: Bid[]
    updateBid: (bid: Bid) => void
    removeBid: (id: string) => void
}

const ScrollContext = createContext<IScrollContext | null>(null)

const ScrollProvider = ({ children }: Props) => {
    const [bids, setBids] = useState<Bid[]>([])
    const pathname = usePathname()

    const updateBid = ({
        id, offset, direction
    }: Bid) => {
        setBids((prev) => [...prev.filter((bid) => bid.id !== id), {
            id,
            offset,
            direction
        }].sort((a, b) => {
            if (a.direction === 1 && a.offset > window.innerHeight / 2) {
                return 1
            }

            return a.offset - b.offset
        }))
    }

    const removeBid = (id: string) => {
        setBids((prev) => prev.filter((bid) => {
            return bid.id !== id
        }))
    }

    useEffect(() => {
        setBids([])
    }, [pathname])

    return <ScrollContext.Provider value={{
        bids,
        updateBid,
        removeBid
    }}
    >
        {children}
    </ScrollContext.Provider>
}

const useScrollContext = () => {
    const ctx = useContext(ScrollContext)

    if (!ctx) {
        throw new Error('Context not defined')
    }

    return ctx
}

export {
    ScrollProvider, useScrollContext
}

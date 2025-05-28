import { useEffect } from 'react'

export const useOnScroll = (callback: () => void, callOnInit?: boolean) => {
    useEffect(() => {
        window.addEventListener('scroll', callback)
        return () => window.removeEventListener('scroll', callback)
    }, [callback])

    useEffect(() => {
        if (callOnInit) {
            callback()
        }
    }, [])
}

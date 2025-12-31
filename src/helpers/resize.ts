import { useEffect } from 'react'

export const useOnResize = (callback: () => void, callOnInit?: boolean) => {
    useEffect(() => {
        window.addEventListener('resize', callback)

        return () => window.removeEventListener('resize', callback)
    }, [callback])

    useEffect(() => {
        if (callOnInit) {
            callback()
        }
    }, [])
}

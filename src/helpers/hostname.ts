export const getHostname = () => {
    if (process.env.NODE_ENV === 'development') {
        return 'http://localhost:3000'
    }

    return process.env.NEXT_PUBLIC_PROD_URL
}

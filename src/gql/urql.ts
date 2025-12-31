import { cacheExchange, fetchExchange, createClient, Client, ssrExchange } from 'urql'
import { cache } from 'react'

const registerUrql = (makeClient: () => Client) => {
    const getClient = cache(makeClient)

    return {
        getClient
    }
}

const makeClient = () => {
    return createClient({
        url: `${process.env.NEXT_PUBLIC_API}/graphql`,
        exchanges: [cacheExchange, fetchExchange]
    })
}

export const makeFrontendClient = () => {
    const ssr = ssrExchange()

    return {
        client: createClient({
            url: `${process.env.NEXT_PUBLIC_API}/graphql`,
            exchanges: [cacheExchange, ssr, fetchExchange]
        }),
        ssr
    }
}

export const { getClient } = registerUrql(makeClient)

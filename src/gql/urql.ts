import { cacheExchange, fetchExchange, createClient, Client } from 'urql'
import { cache } from 'react'

function registerUrql (makeClient: () => Client) {
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

const { getClient } = registerUrql(makeClient)

export { getClient }

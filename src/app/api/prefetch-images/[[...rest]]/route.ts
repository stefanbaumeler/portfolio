import { NextRequest, NextResponse } from 'next/server'
import { parseHTML } from 'linkedom'

export const dynamic = 'force-static'

const getHostname = () => {
    if (process.env.NODE_ENV === 'development') {
        return 'localhost:3000'
    }

    return 'localhost:3000'
}

export const GET = async (
    _: NextRequest,
    { params }: any
) => {
    const schema = process.env.NODE_ENV === 'development' ? 'http' : 'http'
    const host = getHostname()
    if (!host) {
        return new Response('Failed to get hostname from env', {
            status: 500
        })
    }
    const href = (await params).rest?.join('/') ?? ''

    const url = `${schema}://${host}/${href}`
    const response = await fetch(url)
    if (!response.ok) {
        return new Response('Failed to fetch', {
            status: response.status
        })
    }
    const body = await response.text()
    const { document } = parseHTML(body)
    const images = Array.from(document.querySelectorAll('main img'))
        .filter((img) => img.getAttribute('loading') !== 'lazy')
        .map((img) => ({
            srcset: img.getAttribute('srcset') || img.getAttribute('srcSet'), // Linkedom is case-sensitive
            sizes: img.getAttribute('sizes'),
            src: img.getAttribute('src'),
            alt: img.getAttribute('alt'),
            loading: img.getAttribute('loading')
        }))
        .filter((img) => img.src)
    return NextResponse.json(
        {
            images
        },
        {
            headers: {
                'Cache-Control': 'public, max-age=3600'
            }
        }
    )
}

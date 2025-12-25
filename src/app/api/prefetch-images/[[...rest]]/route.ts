import { NextRequest, NextResponse } from 'next/server'
import { parseHTML } from 'linkedom'

export const dynamic = 'force-static'

export const GET = async (
    _: NextRequest,
    { params }: { params: Promise<{ rest?: string[] }> }
) => {
    const href = (await params).rest?.join('/') ?? ''

    const url = `http://localhost:3000/${href}`
    const response = await fetch(url)
    const body = await response.text()

    if (!response.ok) {
        return new Response('Failed to fetch', {
            status: response.status
        })
    }
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

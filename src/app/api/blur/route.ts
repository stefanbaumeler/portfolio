import { NextRequest } from 'next/server'

export async function GET (req: NextRequest) {
    const imageUrl = req.nextUrl.searchParams.get('url')

    if (!imageUrl) {
        return new Response('Missing image URL', {
            status: 400
        })
    }

    try {
        const imageResponse = await fetch(imageUrl)
        const imageBuffer = await imageResponse.arrayBuffer()
        const bytes = new Uint8Array(imageBuffer)
        const binary = bytes.reduce((acc, byte) => acc + String.fromCharCode(byte), '')
        const base64 = Buffer.from(binary, 'binary').toString('base64')

        const blurDataURL = `data:image/webp;base64,${base64}`

        return new Response(JSON.stringify({
            blurDataURL
        }), {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    } catch (err) {
        console.error('Failed to generate blurDataURL:', err)
        return new Response('Error generating blur preview', {
            status: 500
        })
    }
}

import { NextRequest } from 'next/server'
import sharp from 'sharp'

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

        const resizedBuffer = await sharp(imageBuffer)
            .resize(10) // tiny preview
            .toFormat('webp')
            .toBuffer()

        const base64 = resizedBuffer.toString('base64')
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

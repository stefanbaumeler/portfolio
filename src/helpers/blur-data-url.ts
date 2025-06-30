import sharp from 'sharp'

export const getBlurDataURL = async (imageUrl: string) => {
    console.log(imageUrl)
    const response = await fetch(imageUrl)
    const buffer = await response.arrayBuffer()

    const sharpBuffer = await sharp(buffer).toBuffer()
    const base64 = sharpBuffer.toString('base64')

    return `data:image/webp;base64,${base64}`
}

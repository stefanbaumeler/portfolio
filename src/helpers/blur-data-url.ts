export const getBlurDataURL = async (imageUrl: string) => {
    const imageResponse = await fetch(imageUrl)
    const imageBuffer = await imageResponse.arrayBuffer()
    const bytes = new Uint8Array(imageBuffer)
    const binary = bytes.reduce((acc, byte) => acc + String.fromCharCode(byte), '')
    const base64 = Buffer.from(binary, 'binary').toString('base64')

    return `data:image/webp;base64,${base64}`
}

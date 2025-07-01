export const getBlurDataURL = async (imageUrl: string) => {
    const imageResponse = await fetch(`/api/blur?url=${encodeURIComponent(imageUrl)}`)
    const json = await imageResponse.json()
    return json.blurDataURL
}

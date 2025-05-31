'use server'

import { DOMParser } from 'linkedom'

export const getAspectRatioOfSVG = async (url: string) => {
    console.log(url)
    const response = await fetch(url)
    const text = await response.text()

    const parser = new DOMParser()
    const doc = parser.parseFromString(text, 'image/svg+xml')
    const svg = doc.documentElement

    let width = parseInt(svg.getAttribute('width') ?? '0')
    let height = parseInt(svg.getAttribute('height') ?? '0')
    const viewBox = svg.getAttribute('viewBox')

    if (viewBox) {
        const [, , viewWidth, viewHeight] = viewBox.split(' ')
        width = parseInt(viewWidth ?? '0') ?? width
        height = parseInt(viewHeight ?? '0') ?? height
    }

    if (width && height) {
        return {
            width,
            height,
            aspectRatio: width / height
        }
    }
}

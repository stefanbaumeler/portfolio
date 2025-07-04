export const hexToHSL = (hex: string) => {
    const r = parseInt(hex.substring(1, 3), 16) / 255
    const g = parseInt(hex.substring(3, 5), 16) / 255
    const b = parseInt(hex.substring(5, 7), 16) / 255

    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)

    let h = max === min ? 0 : (max + min) / 2
    let s = 0
    const l = (max + min) / 2

    if (max !== min) {
        const d = max - min

        s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

        switch (max) {
        case r:
            h = (g - b) / d + (g < b ? 6 : 0)
            break
        case g:
            h = (b - r) / d + 2
            break
        case b:
            h = (r - g) / d + 4
            break
        }

        h = h / 6
    }

    return {
        h: Math.round(h * 360),
        s: Math.round(s * 100),
        l: Math.round(l * 100)
    }
}

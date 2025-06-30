'use client'

import { getHostname } from '@/helpers/hostname'

export const imageLoader = ({
    src, width, quality
}: { src: string, width: number, quality?: number }) => {
    const host = getHostname()

    return `${host}/_next/image?url=${encodeURIComponent(`${src}?width=${width}&quality=${quality ?? 75}`)}`
}

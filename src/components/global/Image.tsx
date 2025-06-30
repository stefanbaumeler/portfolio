import NextImage from 'next/image'
import { ComponentProps } from 'react'
import { imageLoader } from '@/helpers/image-loader'

type Props = {
    invert?: boolean
    aspect?: number
} & ComponentProps<typeof NextImage>

const getHostname = () => {
    if (process.env.NODE_ENV === 'development') {
        return 'http://localhost:3000'
    }

    return process.env.NEXT_PUBLIC_PROD_URL
}

export const Image = async ({
    className, invert, aspect, ...props
}: Props) => {
    const res = await fetch(`${getHostname()}/api/blur?url=${encodeURIComponent(`${props.src}?width=10`)}`)
    const { blurDataURL } = await res.json()

    return <div
        style={{
            aspectRatio: aspect ?? ''
        }}
        className={`${className}${invert ? ` ${className}--invert` : ''}`}
    >
        <div className={`image${invert ? ' image--invert' : ''}`}>
            <NextImage
                loader={imageLoader}
                className="image__image"
                quality={75}
                placeholder="blur"
                blurDataURL={blurDataURL}
                {...props}
            />
        </div>
    </div>
}

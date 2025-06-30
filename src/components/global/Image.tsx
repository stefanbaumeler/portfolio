import NextImage from 'next/image'
import { ComponentProps } from 'react'
import { imageLoader } from '@/helpers/image-loader'
import { getBlurDataURL } from '@/helpers/blur-data-url'

type Props = {
    invert?: boolean
    aspect?: number
    blur?: boolean
} & ComponentProps<typeof NextImage>

export const Image = async ({
    className, invert, aspect, blur, ...props
}: Props) => {
    const blurDataURL = blur ? await getBlurDataURL(`${props.src}?width=10`) : undefined

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
                placeholder={blur ? 'blur' : 'empty'}
                blurDataURL={blurDataURL}
                {...props}
            />
        </div>
    </div>
}

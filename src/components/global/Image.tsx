'use client'

import NextImage from 'next/image'
import { ComponentProps, useEffect, useState } from 'react'
import { imageLoader } from '@/helpers/image-loader'
import { getBlurDataURL } from '@/helpers/blur-data-url'

type Props = {
    invert?: boolean
    aspect?: number
    blur?: boolean
} & ComponentProps<typeof NextImage>

export const Image = ({
    className, invert, aspect, blur = true, ...props
}: Props) => {
    const [blurDataURL, setBlurDataURL] = useState('')

    useEffect(() => {
        async function fetchBlur () {
            const res = await getBlurDataURL(`${props.src}?width=10`)
            setBlurDataURL(res)
        }

        if (blur) {
            fetchBlur()
        }
    }, [])

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
                placeholder={blurDataURL ? 'blur' : 'empty'}
                blurDataURL={blurDataURL}
                {...props}
            />
        </div>
    </div>
}

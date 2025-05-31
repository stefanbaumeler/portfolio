import NextImage from 'next/image'
import { ComponentProps } from 'react'

type Props = {
    invert?: boolean
    aspect?: number
} & ComponentProps<typeof NextImage>

export const Image = ({
    className, invert, aspect, ...props
}: Props) => {
    return <div
        style={{
            aspectRatio: aspect ?? ''
        }}
        className={`${className}${invert ? ` ${className}--invert` : ''}`}
    >
        <div className={`image${invert ? ' image--invert' : ''}`}>
            <NextImage
                className="image__image"
                quality={75}
                {...props}
            />
        </div>
    </div>
}

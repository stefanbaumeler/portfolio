import NextImage from 'next/image'
import { ComponentProps } from 'react'

type Props = ComponentProps<typeof NextImage>

export const Image: typeof NextImage = (({
    className, ...props
}: Props) => {
    return <div className={className}>
        <div className="image">
            <NextImage
                className="image__image"
                quality={75}
                {...props}
            />
        </div>
    </div>
}) as typeof NextImage

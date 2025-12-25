'use client'

import { TBlogImage } from '~/schema'
import { useSliderContext } from '@/context/slider'
import { ReactNode } from 'react'

type Props = {
	item: TBlogImage
    children?: ReactNode
}

export const BlogImageImage = ({
    item, children
}: Props) => {
    const { setActive } = useSliderContext()
    return <figure
        onClick={() => setActive(item.id)}
    >
        {children}
        <figcaption className="content__caption">
            {item.caption}
        </figcaption>
    </figure>
}

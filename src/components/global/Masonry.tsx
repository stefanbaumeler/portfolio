'use client'

import MasonryBase, { MasonryProps } from 'react-masonry-css'
import { ReactNode } from 'react'

type Props = MasonryProps & {
	children: ReactNode
}
export const Masonry = ({
    children, ...props
}: Props) => {
    return <MasonryBase
        {...props}
    >
        {children}
    </MasonryBase>
}

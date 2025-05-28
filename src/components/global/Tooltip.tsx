'use client'

import { Placement, shift, useFloating, useHover, useInteractions } from '@floating-ui/react'
import { ReactNode, useState } from 'react'

type Props = {
	children: ReactNode
	content: string | ReactNode
	placement: Placement
	className?: string
	tooltipClass?: string
	tagName?: string
}
export const Tooltip = ({
    children, content, placement, className, tagName = 'div', tooltipClass = 'tooltip'
}: Props) => {
    const [isOpen, setIsOpen] = useState(false)

    const {
        refs, floatingStyles, context
    } = useFloating({
        placement,
        open: isOpen,
        onOpenChange: setIsOpen,
        middleware: [shift({
            padding: 18
        })]
    })

    const hover = useHover(context)

    const {
        getReferenceProps, getFloatingProps
    } = useInteractions([
        hover
    ])

    const CustomTag = `${tagName}` as 'div'

    return <CustomTag
        ref={refs.setReference}
        {...getReferenceProps()}
        className={className}
    >
        {children}
        {isOpen && <div
            className={tooltipClass}
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
        >
            {content}
        </div>}
    </CustomTag>
}

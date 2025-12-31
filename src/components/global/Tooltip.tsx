'use client'

import {
    arrow,
    FloatingArrow,
    Placement,
    shift,
    useFloating,
    useHover,
    useInteractions,
    useTransitionStyles
} from '@floating-ui/react'
import { ReactNode, useRef, useState } from 'react'

type Props = {
    children: ReactNode
    content: string | ReactNode
    placement: Placement
    className?: string
    tooltipClass?: string
    tagName?: string
    forceOpen?: boolean
}

export const Tooltip = ({
    children, content, placement, className, tagName = 'div', tooltipClass = 'tooltip', forceOpen = false
}: Props) => {
    const [isOpen, setIsOpen] = useState(false)
    const arrowRef = useRef(null)

    const {
        refs, floatingStyles, context
    } = useFloating({
        placement,
        open: isOpen || forceOpen,
        onOpenChange: setIsOpen,
        middleware: [shift({
            padding: 18
        }), arrow({
            element: arrowRef
        })]
    })

    const { styles: transitionStyles } = useTransitionStyles(context, {
        duration: 250,
        initial: ({ placement }) => {
            const dir = placement.split('-')[0]

            const base = {
                opacity: 0
            }

            let translate = ''

            switch (dir) {
                case 'top':
                    translate = '0 8px'
                    break
                case 'bottom':
                    translate = '0 -8px'
                    break
                case 'left':
                    translate = '8px 0'
                    break
                case 'right':
                    translate = '-8px 0'
                    break
            }

            return {
                translate,
                ...base
            }
        }
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
        {(isOpen || forceOpen) && <div
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
            className={`tooltip tooltip--${placement} ${tooltipClass}`}
        >
            <div
                className="tooltip__content"
                style={transitionStyles}
            >
                <FloatingArrow
                    className="tooltip__arrow"
                    ref={arrowRef}
                    context={context}
                />
                {content}
            </div>
        </div>}
    </CustomTag>
}

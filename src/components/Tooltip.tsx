import { Placement, useFloating, useHover, useInteractions } from '@floating-ui/react'
import { ReactNode, useState } from 'react'

type Props = {
	children: ReactNode
	label: string
	placement: Placement
	className?: string
	tooltipClass?: string
	tagName?: string
}
export const Tooltip = ({
    children, label, placement, className, tagName = 'div', tooltipClass = 'tooltip'
}: Props) => {
    const [isOpen, setIsOpen] = useState(false)

    const {
        refs, floatingStyles, context
    } = useFloating({
        placement,
        open: isOpen,
        onOpenChange: setIsOpen
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
            {label}
        </div>}
    </CustomTag>
}

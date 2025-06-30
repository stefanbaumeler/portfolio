'use client'

import { TBlogImage } from '~/schema'
import { SliderControls } from '@/components/SliderControls'
import { useSliderContext } from '@/context/slider'
import { ReactNode, useEffect } from 'react'
import { useBodyContext } from '@/context/body'

type Props = {
    item: TBlogImage
    index: number
    aspect?: number
    children?: ReactNode
}

export const BlogImagePopup = ({
    item, children
}: Props) => {
    const {
        prev, next, setActive, active, addImage
    } = useSliderContext()

    const { setFixed } = useBodyContext()

    useEffect(() => {
        addImage(item.id)

        const keydown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closePopup()
            }
        }

        window.addEventListener('keydown', keydown)

        return () => {
            window.removeEventListener('keydown', keydown)
        }
    }, [])

    useEffect(() => {
        if (active !== '') {
            setFixed(true)
        }
    }, [active])

    const closePopup = () => {
        setFixed(false)
        setActive('')
    }

    return <>
        <div className={`popup${active === item.id ? ' popup--active' : ''}`}>
            {children}
            <SliderControls
                onPrev={prev}
                onClose={closePopup}
                onNext={next}
            />
        </div>
    </>
}

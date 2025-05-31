'use client'

import { Image } from '@/components/global/Image'
import { TBlogImage } from '~/schema'
import { SliderControls } from '@/components/SliderControls'
import { useSliderContext } from '@/context/slider'
import { useEffect } from 'react'

type Props = {
	item: TBlogImage
	index: number
}

export const BlogImage = ({
    item, index
}: Props) => {
    const {
        prev, next, setActive, active, addImage
    } = useSliderContext()

    useEffect(() => {
        addImage(item.id)
    }, [])

    useEffect(() => {
        const keydown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setActive('')
            }
        }

        window.addEventListener('keydown', keydown)

        return () => {
            window.removeEventListener('keydown', keydown)
        }
    }, [])

    return <>
        <figure onClick={() => setActive(item.id)}>
            <Image
                className="article__content-image"
                src={`${process.env.NEXT_PUBLIC_ASSETS}/${item.image?.filename_disk}`}
                alt={item.caption ?? ''}
                fill
                sizes="(max-width: 767px) calc(100vw - 20px), (max-width: 1023px) calc(100vw - 130px), (max-width: 1679px) calc(100vw - 180px), 1500px"
                loading={index < 3 ? 'eager' : 'lazy'}
                quality={75}
            />
            <figcaption className="article__caption">
                {item.caption}
            </figcaption>
        </figure>
        <div className={`popup${active === item.id ? ' popup--active' : ''}`}>
            <Image
                className="popup__image"
                src={`${process.env.NEXT_PUBLIC_ASSETS}/${item.image?.filename_disk}`}
                alt={item.caption ?? ''}
                fill
                sizes="calc(100vw - 180px)"
                loading="lazy"
                quality={75}
            />
            <SliderControls
                onPrev={prev}
                onClose={() => setActive('')}
                onNext={next}
            />
        </div>
    </>
}

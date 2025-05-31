'use client'

import { Image } from '@/components/global/Image'
import { TBlogImage } from '~/schema'
import { SliderControls } from '@/components/SliderControls'
import { useSliderContext } from '@/context/slider'
import { useEffect } from 'react'
import { useBodyContext } from '@/context/body'
import { DarkMode, useDarkContext } from '@/context/dark'

type Props = {
	item: TBlogImage
	index: number
    aspect?: number
}

export const BlogImage = ({
    item, index, aspect
}: Props) => {
    const {
        prev, next, setActive, active, addImage
    } = useSliderContext()

    const { state } = useDarkContext()
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
        <figure onClick={() => setActive(item.id)}>
            <Image
                aspect={aspect ?? item.image.width / item.image.height}
                invert={item.invert && state === DarkMode.Dark}
                className="article__content-image"
                src={`${process.env.NEXT_PUBLIC_ASSETS}/${item.image?.filename_disk}`}
                alt={item.caption ?? ''}
                fill
                sizes="(max-width: 767px) calc(100vw - 20px), (max-width: 1023px) calc(100vw - 130px), (max-width: 1199px) calc(100vw - 180px), (max-width: 1375px) calc(100vw - 530px), 850px"
                loading={index < 3 ? 'eager' : 'lazy'}
            />
            <figcaption className="article__caption">
                {item.caption}
            </figcaption>
        </figure>
        <div className={`popup${active === item.id ? ' popup--active' : ''}`}>
            <Image
                invert={item.invert}
                className="popup__image"
                src={`${process.env.NEXT_PUBLIC_ASSETS}/${item.image?.filename_disk}`}
                alt={item.caption ?? ''}
                fill
                sizes="calc(100vw - 180px)"
                loading="lazy"
            />
            <SliderControls
                onPrev={prev}
                onClose={closePopup}
                onNext={next}
            />
        </div>
    </>
}

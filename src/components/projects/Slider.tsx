'use client'

import Icon from '@mdi/react'
import * as Icons from '@mdi/js'
import Image from 'next/image'
import { MouseEvent, useEffect, useState } from 'react'
import { TFProject } from '~/schema'
import { SliderControls } from '@/components/SliderControls'

type Props = {
    gallery: TFProject['gallery']
}

export const Slider = ({ gallery }: Props ) => {
    const [activeImage, setActiveImage] = useState(0)
    const [active, setActive] = useState(false)

    useEffect(() => {
        const keydown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setActive(false)
            }
        }

        window.addEventListener('keydown', keydown)

        return () => {
            window.removeEventListener('keydown', keydown)
        }
    }, [])

    const prevImage = (event: MouseEvent) => {
        setActiveImage(activeImage === 0 ? gallery.length - 1 : activeImage - 1)
        event.preventDefault()
        event.stopPropagation()
    }

    const nextImage = (event: MouseEvent) => {
        setActiveImage(activeImage + 1 > gallery.length - 1 ? 0 : activeImage + 1)
        event.preventDefault()
        event.stopPropagation()
    }

    const closeSlider = (event: MouseEvent) => {
        setActive(false)
        event.preventDefault()
        event.stopPropagation()
    }

    return <div
        className={`slider${active ? ' slider--active' : ''}`}
        onClick={() => setActive(true)}
    >
        <div className="slider__hint">
            <Icon
                path={Icons.mdiCameraOutline}
                className="slider__icon"
            />
        </div>
        <div className="slider__images">
            {gallery.map((image, k) => <div
                className={`slider__image-container ${activeImage === k ? 'slider__image-container--active' : ''}`}
                key={k}
            >
                <Image
                    className="slider__image"
                    fill
                    sizes="(max-width: 767px) calc(100vw - 20px), (max-width: 1023px) calc(100vw - 130px), (max-width: 1679px) calc(100vw - 180px), 1500px"
                    src={`${process.env.NEXT_PUBLIC_ASSETS}/${image?.directus_files_id?.filename_disk}`}
                    alt=""
                    loading={k === 0 ? 'eager' : undefined}
                    priority={k === 0}
                    quality={75}
                />
            </div>)}
        </div>
        <SliderControls
            onPrev={prevImage}
            onClose={closeSlider}
            onNext={nextImage}
        />
    </div>
}

import projects from '../data/work'
import { useEffect, useRef, useState } from 'react'
import Icon from '@mdi/react'
import * as Icons from '@mdi/js'
import Image from 'next/image'
import { Feature } from './Feature'
import { Technology } from './Technology'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

type Props = {
	project: typeof projects[0]
}

export const Project = ({ project }: Props) => {
    const container = useRef<HTMLLIElement>(null)
    const [activeImage, setActiveImage] = useState(0)
    const [sliderActive, setSliderActive] = useState(false)

    useEffect(() => {
        const keydown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setSliderActive(false)
            }
        }

        window.addEventListener('keydown', keydown)

        return () => {
            window.removeEventListener('keydown', keydown)
        }
    }, [])

    const prevImage = (event: Event) => {
        setActiveImage(activeImage === 0 ? project.images.length - 1 : activeImage - 1)
        event.preventDefault()
        event.stopPropagation()
    }

    const nextImage = (event: Event) => {
        setActiveImage(activeImage + 1 > project.images.length - 1 ? 0 : activeImage + 1)
        event.preventDefault()
        event.stopPropagation()
    }

    const closeSlider = (event: Event) => {
        setSliderActive(false)
        event.preventDefault()
        event.stopPropagation()
    }

    useGSAP(() => {
        const action = (trigger: string) => {
            gsap.to(trigger, {
                scrollTrigger: {
                    trigger,
                    start: 'center 90%',
                    end: 'top 70%',
                    scrub: 0.5
                },
                x: 0,
                opacity: 1
            })
        }

        action('.project__title')
        action('.project__description')
        action('.project__technologies')
        action('.project__button-container')
    }, {
        scope: container
    })

    return <li
        className="project"
        ref={container}
    >
        <div
            className={`project__slider${sliderActive ? ' project__slider--active' : ''}`}
            onClick={() => setSliderActive(true)}
        >
            <div className="project__images">
                {project.images?.map((image, k) => <div
                    className={`project__image-container ${activeImage === k ? 'project__image-container--active' : ''}`}
                    key={k}
                >
                    <Image
                        className="project__image"
                        fill={true}
                        sizes="100vw"
                        src={`/images/${image.url}`}
                        alt={image.alt}
                    />
                </div>)}
            </div>
            <div className="project__controls">
                <button
                    className="project__slide project__slide--prev"
                    aria-label="Slide to previous image"
                    onClick={(event) => {
                        prevImage(event as unknown as Event)
                    }}
                    style={{
                        background: `${project.color}`
                    }}
                >
                    <Icon path={Icons.mdiChevronLeft} />
                </button>
                <button
                    className="project__slide project__slide--next"
                    aria-label="Slide to next image"
                    onClick={(event) => {
                        nextImage(event as unknown as Event)
                    }}
                    style={{
                        background: `${project.color}`
                    }}
                >
                    <Icon path={Icons.mdiChevronRight} />
                </button>
                <button
                    className="project__back"
                    aria-label="Close slider"
                    onClick={(event) => {
                        closeSlider(event as unknown as Event)
                    }}
                    style={{
                        background: `${project.color}`
                    }}
                >
                    <Icon
                        path={Icons.mdiClose}
                    />
                </button>
            </div>
        </div>
        <div className="project__content">
            <h2 className="project__title">
                {project.name}
            </h2>
            <div className="project__description">
                <p>
                    {project.description}
                </p>
            </div>
            <ul className="project__features">
                {project.features.map((feature, key) => <Feature
                    feature={feature}
                    key={key}
                    k={key}
                />)}
            </ul>
            <ul className="project__technologies">
                {project.tech?.map((technology, key) => <Technology
                    technology={technology}
                    color={project.color}
                    key={key}
                    k={key}
                />)}
            </ul>
            <div className="project__button-container">
                <a
                    target="_blank"
                    href={project.url}
                    className="project__button"
                    style={{
                        background: Array.isArray(project.color) ? `linear-gradient(-45deg, ${project.color[0]}, ${project.color[1]})` : project.color
                    }}
                    rel="noreferrer"
                >
                    {project.private ? <>
                        <Icon path={Icons.mdiInformationOutline} />
						Contact me for more infos
                    </> : <>
                        <Icon path={Icons.mdiOpenInNew} />
						View Project
                    </>}
                </a>
            </div>
        </div>
    </li>
}

import projects from '../data/work'
import { CSSProperties, useEffect, useState } from 'react'
import { ScrollTrigger, Tween } from 'react-gsap'
import Icon from '@mdi/react'
import * as Icons from '@mdi/js'
import Image from 'next/image'

export const Work = () => {
    const workElements = projects.map((project, k) => {
        const [activeImage, setActiveImage] = useState(0)
        const [sliderActive, setSliderActive] = useState(false)

        const technologies = project.tech?.map((technology, k) => {
            const t = technology as { label: string, secondary: boolean | undefined }
            const classes = ['project__technology']

            if (t.secondary) {
                classes.push('project__technology--secondary')
            }
            return <li
                className={classes.join(' ')}
                key={k}
                style={{
                    '--technologyId': `${k}`,
                    background: Array.isArray(project.color) ? `linear-gradient(-45deg, ${project.color[0]}, ${project.color[1]})` : project.color
                } as CSSProperties}
            >
                {technology.label}
            </li>
        })

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

        const features = project.features?.map((feature, k) => {
            return <ScrollTrigger
                key={k}
                start={'center 90%'}
                end={'top 50%'}
                scrub={0.5}
            >
                <Tween
                    to={{
                        x: 0,
                        opacity: 1
                    }}
                >
                    <li
                        className="project__feature"
                        style={{
                            '--featureId': `${k + 1}`
                        } as CSSProperties}
                    >
                        {feature}
                    </li>
                </Tween>
            </ScrollTrigger>
        })

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

        return <li
            className="project"
            key={k}
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
                        onClick={(event) => { prevImage(event as unknown as Event) }}
                        style={{
                            background: `${project.color}`
                        }}
                    >
                        <Icon path={Icons.mdiChevronLeft} />
                    </button>
                    <button
                        className="project__slide project__slide--next"
                        aria-label="Slide to next image"
                        onClick={(event) => { nextImage(event as unknown as Event) }}
                        style={{
                            background: `${project.color}`
                        }}
                    >
                        <Icon path={Icons.mdiChevronRight} />
                    </button>
                    <button
                        className="project__back"
                        aria-label="Close slider"
                        onClick={(event) => { closeSlider(event as unknown as Event) }}
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
                <ScrollTrigger
                    start={'center 90%'}
                    end={'top 70%'}
                    scrub={0.5}
                >
                    <Tween
                        to={{
                            x: 0,
                            opacity: 1
                        }}
                    >
                        <h2 className="project__title">
                            {project.name}
                        </h2>
                    </Tween>
                </ScrollTrigger>

                <ScrollTrigger
                    start={'center 90%'}
                    end={'top 70%'}
                    scrub={0.5}
                >
                    <Tween
                        to={{
                            x: 0,
                            opacity: 1
                        }}
                    >
                        <div className="project__description">
                            <p>
                                {project.description}
                            </p>
                        </div>
                    </Tween>
                </ScrollTrigger>
                <ul className="project__features">
                    {features}
                </ul>
                <ScrollTrigger
                    key={k}
                    start={'center 90%'}
                    end={'top 70%'}
                    scrub={0.5}
                >
                    <Tween
                        to={{
                            x: 0,
                            opacity: 1
                        }}
                    >
                        <ul className="project__technologies">
                            {technologies}
                        </ul>
                    </Tween>
                </ScrollTrigger>
                <ScrollTrigger
                    start={'center 90%'}
                    end={'top 70%'}
                    scrub={0.5}
                >
                    <Tween
                        to={{
                            x: 0,
                            opacity: 1
                        }}
                    >
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
                    </Tween>
                </ScrollTrigger>
            </div>
        </li>
    })

    return <section className="projects">
        <ScrollTrigger
            start={'bottom bottom'}
            scrub={0.5}
            pin={true}
            pinSpacing={false}
        >
            <Tween>
                <ul className="projects__list">
                    {workElements}
                </ul>
            </Tween>
        </ScrollTrigger>
    </section>
}

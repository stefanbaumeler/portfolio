import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import Image from 'next/image'
import { useRef } from 'react'

export const Home = () => {
    const container = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const trigger = {
            trigger: '.home__content',
            start: 'center center',
            end: 'bottom -100%',
            scrub: 0.5
        }
        gsap.to('.home__deco-lines', {
            scale: 1.15,
            scrollTrigger: trigger
        })
        gsap.to('.home__blur', {
            opacity: 1,
            scrollTrigger: trigger
        })
        gsap.to('.home__title', {
            y: '-25%',
            scale: 0.85,
            scrollTrigger: trigger,
            filter: 'blur(10px)'
        })
        gsap.to('.home__image', {
            y: '-25%',
            scrollTrigger: trigger
            // filter: 'blur(5px)'
        })
    })
    return <section className="home">
        <div className="home__content">
            <div className="home__image-container">
                <Image
                    className="home__image"
                    src="/images/stefan-baumeler.webp"
                    alt="Stefan Baumeler"
                    fill={true}
                    sizes="100vw"
                    loading={'eager'}
                />
            </div>
            <div className="home__blur" />
            <div className="home__deco-lines">
                <div className="home__deco-line"></div>
                <div className="home__deco-line"></div>
                <div className="home__deco-line"></div>
                <div className="home__deco-line"></div>
                <div className="home__deco-line"></div>
            </div>
            <h1 className="home__title">
                <span className="home__line">
				Hello
                </span>
                <span className="home__line">
				I am
                </span>
                <span className="home__line">
				Stefan
                </span>
            </h1>
        </div>
    </section>
}

import { ScrollTrigger, Tween } from 'react-gsap'
import Image from 'next/image'
export const Home = () => {
    return <section className="home">
        <ScrollTrigger
            start={'center center'}
            end={'bottom top'}
            scrub={0.5}
            pin={true}
            pinSpacing={false}
        >
            <Tween>
                <div className="home__content">
                    <div className="home__image-container">
                        <Image
                            className="home__image"
                            src="/images/stefan-baumeler.webp"
                            alt="Stefan Baumeler"
                            fill={true}
                            sizes="100vw"
                        />
                    </div>
                    <ScrollTrigger
                        start={'center center'}
                        end={'bottom -100%'}
                        scrub={0.5}
                    >
                        <Tween
                            to={{
                                opacity: 1
                            }}
                        >
                            <div className="home__blur"></div>
                        </Tween>
                        <Tween
                            to={{
                                scale: 1.15
                            }}
                        >
                            <div className="home__background"></div>
                        </Tween>
                        <Tween
                            to={{
                                y: '-25%',
                                scale: 0.85
                            }}
                        >
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
                        </Tween>
                    </ScrollTrigger>
                </div>
            </Tween>
        </ScrollTrigger>
    </section>
}

'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react'

import UAParser from 'ua-parser-js'
import { ReactNode, useEffect, useState } from 'react'
import { Nav } from '../../components/Nav'
import { TransitionRouter } from 'next-transition-router'
import { DarkProvider } from '../../context/dark'

const ClientLayout = ({ children }: { children: ReactNode }) => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.registerPlugin(useGSAP)

    const [browser, setBrowser] = useState('loading')

    useEffect(() => {
        const uaParser = new UAParser()
        const parsedUa = uaParser.getResult()

        setBrowser(parsedUa.browser.name?.split(' ').join('-').toLowerCase() || 'loading')
    }, [])

    return <div className="root">
        <Nav />
        <TransitionRouter
            auto={true}
            leave={(next) => {
                const bottomLayer = gsap.fromTo('.main__transition:first-of-type', {
                    height: 0,
                    bottom: 0,
                    top: 'auto'
                }, {
                    height: '100%',
                    onComplete: next,
                    ease: 'circ.inOut',
                    duration: 0.5
                })

                const topLayer = gsap.fromTo('.main__transition:nth-of-type(2)', {
                    height: 0,
                    bottom: 0,
                    top: 'auto'
                }, {
                    height: '100%',
                    onComplete: next,
                    ease: 'circ.inOut',
                    duration: 0.5,
                    delay: 0.05
                })

                return () => {
                    topLayer.kill()
                    bottomLayer.kill()
                }
            }}
            enter={(next) => {
                const bottomLayer = gsap.fromTo('.main__transition:first-of-type', {
                    top: 0,
                    bottom: 'auto',
                    height: '100%'
                }, {
                    height: 0,
                    onComplete: next,
                    ease: 'circ.inOut',
                    duration: 0.5,
                    delay: 0.05
                })

                const topLayer = gsap.fromTo('.main__transition:nth-of-type(2)', {
                    top: 0,
                    bottom: 'auto',
                    height: '100%'
                }, {
                    height: 0,
                    onComplete: next,
                    ease: 'circ.inOut',
                    duration: 0.5
                })

                return () => {
                    topLayer.kill()
                    bottomLayer.kill()
                }
            }}
        >
            <DarkProvider>
                <main className={`main main--${browser}`}>
                    <div className="main__transition"></div>
                    <div className="main__transition"></div>
                    {children}
                </main>
            </DarkProvider>
        </TransitionRouter>
    </div>
}

export default ClientLayout

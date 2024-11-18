import '../styles/index.scss'
import type { AppProps } from 'next/app'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP)
export default function App ({
    Component, pageProps
}: AppProps) {
    return <Component {...pageProps} />
}

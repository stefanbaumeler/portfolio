import '../styles/index.scss'
import type { AppProps } from 'next/app'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function App ({
    Component, pageProps
}: AppProps) {
    return <Component {...pageProps} />
}

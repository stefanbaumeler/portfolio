import Head from 'next/head'
import { Home, Skills, Work, Contact } from '../components'
import UAParser from 'ua-parser-js'
import { useEffect, useState } from 'react'

const HomePage = () => {
    const [browser, setBrowser] = useState('loading')

    useEffect(() => {
        const uaParser = new UAParser()
        const parsedUa = uaParser.getResult()

        setBrowser(parsedUa.browser.name?.split(' ').join('-').toLowerCase() || 'loading')
    }, [typeof window])

    return <>
        <Head>
            <title>
                    Stefan Baumeler - Web Developer - Official Portfolio
            </title>
            <meta
                name="googlebot"
                content="notranslate"
            />
            <meta
                name="description"
                content="The official portfolio of Stefan Baumeler, a location independent web developer based in Switzerland, developing, high quality web applications for Swiss companies."
            />
            <meta
                name="robots"
                content="index,follow"
            />
            <meta
                name="keywords"
                content="Stefan Baumeler, Web Developer, Web Dev, Web Designer, Full Stack, Portfolio, React, TypeScript, GraphQL, Node.js"
            />
            <meta
                name="author"
                content="Stefan Baumeler"
            />
            <meta
                name="theme-color"
                content="#EE5522"
            />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <link
                rel="shortcut icon"
                href="/images/favicon.ico"
            />
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/images/favicon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/images/favicon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/images/favicon.png"
            />
            <link
                rel="canonical"
                href="https://stefan-baumeler.com/"
            />
        </Head>
        <main
            className={`main main--${browser}`}
        >
            <Home />
            <Work />
            <Skills />
            <Contact />
        </main>
    </>
}

export default HomePage

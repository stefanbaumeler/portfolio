import '@/styles/util/fonts.scss'
import '@/styles/util/reset.scss'

import '@/styles/lib/shiki.scss'
import '@/styles/lib/map.scss'

import '@/styles/blocks/html.scss'
import '@/styles/blocks/body.scss'
import '@/styles/blocks/home.scss'
import '@/styles/blocks/article.scss'
import '@/styles/blocks/article-nav.scss'
import '@/styles/blocks/articles.scss'
import '@/styles/blocks/blog.scss'
import '@/styles/blocks/blogs.scss'
import '@/styles/blocks/brand.scss'
import '@/styles/blocks/contact.scss'
import '@/styles/blocks/hover-link.scss'
import '@/styles/blocks/image.scss'
import '@/styles/blocks/main.scss'
import '@/styles/blocks/meta.scss'
import '@/styles/blocks/nav.scss'
import '@/styles/blocks/project.scss'
import '@/styles/blocks/projects.scss'
import '@/styles/blocks/root.scss'
import '@/styles/blocks/skills.scss'
import '@/styles/blocks/slider.scss'
import '@/styles/blocks/slider-controls.scss'
import '@/styles/blocks/stat.scss'
import '@/styles/blocks/statistics.scss'
import '@/styles/blocks/teaser.scss'
import '@/styles/blocks/top-nav.scss'
import '@/styles/blocks/not-found.scss'
import '@/styles/blocks/map.scss'
import '@/styles/blocks/drawer.scss'
import '@/styles/blocks/quote.scss'
import '@/styles/blocks/popup.scss'

import { ReactNode } from 'react'
import { Metadata, Viewport } from 'next'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'
import { routing } from '@/i18n/routing'
import { NavLists } from '@/components/global/nav/NavLists'
import { NavProvider } from '@/context/nav'
import { DarkMode, DarkProvider } from '@/context/dark'
import { UAProvider } from '@/context/ua'
import { TopNav } from '@/components/global/nav/TopNav'
import { TopNavProvider } from '@/context/top-nav'
import { headers } from 'next/headers'
import { Body } from '@/components/Body'
import { Nav } from '@/components/global/nav/Nav'
import { BodyProvider } from '@/context/body'

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1
}

export const ppr = true

export const metadata: Metadata = {
    title: 'Stefan Baumeler — Web Developer — Official Portfolio',
    description: 'The official portfolio of Stefan Baumeler, a location independent senior web developer based in Switzerland developing high quality web applications for Swiss companies.',
    robots: {
        index: true,
        follow: true
    },
    keywords: ['Stefan Baumeler', 'Web Developer', 'Web Dev', 'Webentwicklung', 'Programmierung', 'Luzern', 'Schweiz', 'React', 'Next.js', 'Node.js'],
    authors: [
        {
            name: 'Stefan Baumeler',
            url: 'https://stefan-baumeler.com'
        }
    ],
    alternates: {
        canonical: 'https://stefan-baumeler.com/'
    }
}

export const generateStaticParams = () => {
    return routing.locales.map((locale) => ({
        locale
    }))
}

type Props = {
	children: ReactNode
	params: Promise<{ locale: string }>
}

const RootLayout = async ({
    children, params
}: Props) => {
    const { locale } = await params

    setRequestLocale(locale)

    const messages = await getMessages()
    const headersList = await headers()

    const theme = headersList.get('Sec-CH-Prefers-Color-Scheme')

    return <html
        lang={locale}
        className="html"
    >
        <TopNavProvider>
            <DarkProvider initialTheme={theme as DarkMode}>
                <UAProvider>
                    <BodyProvider>
                        <NavProvider>
                            <NextIntlClientProvider messages={messages}>
                                <Body>
                                    <meta
                                        name="googlebot"
                                        content="notranslate"
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
                                    <Nav>
                                        <NavLists />
                                    </Nav>
                                    <main className="main">
                                        <TopNav />
                                        {children}
                                    </main>
                                </Body>
                            </NextIntlClientProvider>
                        </NavProvider>
                    </BodyProvider>
                </UAProvider>
            </DarkProvider>
        </TopNavProvider>
    </html>
}

export default RootLayout

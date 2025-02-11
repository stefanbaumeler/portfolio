import '../styles/util/reset.scss'
import '../styles/blocks/body.scss'
import '../styles/blocks/brand.scss'
import '../styles/blocks/contact.scss'
import '../styles/blocks/home.scss'
import '../styles/blocks/main.scss'
import '../styles/blocks/nav.scss'
import '../styles/blocks/project.scss'
import '../styles/blocks/projects.scss'
import '../styles/blocks/root.scss'
import '../styles/blocks/skills.scss'
import '../styles/blocks/top-nav.scss'

import { ReactNode } from 'react'
import { Metadata, Viewport } from 'next'

export const viewport: Viewport = {
    themeColor: '#EE5522',
    width: 'device-width',
    initialScale: 1
}

export const metadata: Metadata = {
    title: 'Stefan Baumeler - Web Developer - Official Portfolio',
    description: 'The official portfolio of Stefan Baumeler, a location independent web developer based in Switzerland, developing high quality web applications for Swiss companies.',
    robots: {
        index: true,
        follow: true
    },
    keywords: ['Stefan Baumeler', 'Web Developer', 'Web Dev', 'Webentwickler', 'Luzern', 'Schweiz', 'Portfolio', 'React', 'Node.js', 'Next.js'],
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
export default function RootLayout ({ children }: {
	children: ReactNode
}) {
    return (
        <html lang="en">
            <body className="body">
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
                {children}
            </body>
        </html>
    )
}

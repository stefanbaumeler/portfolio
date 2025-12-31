'use client'

import NextLink from 'next/link'
import { Link as LanguagePrefixedLink, getPathname } from '@/i18n/routing'
import { usePathname, useRouter } from 'next/navigation'
import { ComponentProps, MouseEvent, useEffect, useRef } from 'react'
import { useLocale } from 'next-intl'

type PrefetchImage = {
    srcset: string
    sizes: string
    src: string
    alt: string
    loading: string
}

const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

const prefetchImages = async (href: string) => {
    if (!href.startsWith('/')) {
        return []
    }

    const url = new URL(href, window.location.href)
    const imageResponse = await fetch(`/api/prefetch-images${url.pathname}`, {
        priority: 'low'
    } as RequestInit)

    // only throw in dev
    if (!imageResponse.ok && process.env.NODE_ENV === 'development') {
        throw new Error('Failed to prefetch images')
    }

    const { images } = await imageResponse.json()

    return images as PrefetchImage[]
}

const seen = new Set<string>()
const imageCache = new Map<string, PrefetchImage[]>()

type Props = ComponentProps<typeof NextLink> & {
    skipLanguage?: boolean
    onAfterRouteChange?: () => void
}

export const Link = ({
    skipLanguage, onAfterRouteChange, children, ...props
}: Props) => {
    const linkRef = useRef<HTMLAnchorElement>(null)
    const router = useRouter()
    const pathname = usePathname()
    const locale = useLocale()

    const languagePrefixedHref = (skipLanguage ? props.href : getPathname({
        locale,
        href: `${props.href}`
    })).toString()

    useEffect(() => {
        onAfterRouteChange?.()
    }, [pathname])

    useEffect(() => {
        let prefetchTimeout: NodeJS.Timeout | null = null

        if (props.prefetch === false) {
            return
        }

        const linkElement = linkRef.current

        if (!linkElement) {
            return
        }

        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]

            if (entry?.isIntersecting) {
                prefetchTimeout = setTimeout(async () => {
                    router.prefetch(languagePrefixedHref)
                    await sleep(0)

                    if (!imageCache.has(languagePrefixedHref)) {
                        void prefetchImages(languagePrefixedHref).then((images) => {
                            imageCache.set(languagePrefixedHref, images)
                        }, console.error)
                    }

                    observer.unobserve(entry.target)
                }, 300)
            } else if (prefetchTimeout) {
                clearTimeout(prefetchTimeout)
                prefetchTimeout = null
            }
        }, {
            rootMargin: '0px',
            threshold: 0.1
        })

        observer.observe(linkElement)

        return () => {
            observer.disconnect()

            if (prefetchTimeout) {
                clearTimeout(prefetchTimeout)
            }
        }
    }, [languagePrefixedHref, props.prefetch, router])

    const onMouseEnter = () => {
        router.prefetch(languagePrefixedHref)
        const images = imageCache.get(languagePrefixedHref) || []

        for (const image of images) {
            prefetchImage(image)
        }
    }

    const onMouseDown = (event: MouseEvent) => {
        const url = new URL(languagePrefixedHref, window.location.href)

        if (
            url.origin === window.location.origin &&
				event.button === 0 &&
				!event.altKey &&
				!event.ctrlKey &&
				!event.metaKey &&
				!event.shiftKey
        ) {
            event.preventDefault()
            router.push(languagePrefixedHref)
        }
    }

    const Tag = (skipLanguage ? NextLink : LanguagePrefixedLink) as typeof NextLink

    return <Tag
        ref={linkRef}
        onMouseEnter={onMouseEnter}
        onMouseDown={onMouseDown}
        {...props}
    >
        {children}
    </Tag>
}

const prefetchImage = (image: PrefetchImage) => {
    if (image.loading === 'lazy' || seen.has(image.srcset)) {
        return
    }

    const img = new Image() as HTMLImageElement & {
        fetchPriority: string
    }

    img.decoding = 'async'
    img.fetchPriority = 'low'
    img.sizes = image.sizes
    seen.add(image.srcset)
    img.srcset = image.srcset
    img.src = image.src
    img.alt = image.alt
}

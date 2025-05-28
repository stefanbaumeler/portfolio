'use client'

import { MouseEvent, useEffect, useRef, useState } from 'react'
import { slugify } from '@/helpers/slug'
import { TBlogTitle } from '~/schema'
import { useScrollContext } from '@/context/scroll'
import { useTranslations } from 'next-intl'

type Props = {
	titles?: TBlogTitle[]
}

const scrollToTop = () => {
    history.pushState({}, '', window.location.pathname + window.location.search)
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}

export const ArticleNav = ({ titles = [] }: Props) => {
    const [progressTop, setProgressTop] = useState(0)
    const [progressHeight, setProgressHeight] = useState(0)
    const [winningBid, setWinningBid] = useState<string | undefined>(undefined)
    const [paused, setPaused] = useState(false)
    const t = useTranslations()

    const articleNavEl = useRef<HTMLDivElement>(null)
    const anchorEls = useRef<{ [key: string]: HTMLAnchorElement | null }>({})
    const scrollContext = useScrollContext()

    const scrollToAnchor = (event: MouseEvent, id: string) => {
        event.preventDefault()

        if (paused) {
            return
        }

        const target = event.target as HTMLAnchorElement

        window.history.pushState({}, '', target.hash)

        document.querySelector(target.hash)?.scrollIntoView({
            behavior: 'smooth'
        })

        setActiveAnchor(id, true)
    }

    const setActiveAnchor = (id?: string, pause?: boolean) => {
        if (paused) {
            return
        }

        if (id || winningBid) {
            const target = anchorEls.current[id ?? winningBid ?? 0]

            if (target) {
                setProgressTop(target.offsetTop + 8)
                setProgressHeight(target.clientHeight - 16)
            }
        }

        if (pause) {
            setPaused(true)

            setTimeout(() => {
                setPaused(false)
            }, 1000)
        }
    }

    useEffect(() => {
        const winner = scrollContext.bids[0]?.id

        console.log(winner, scrollContext.bids)

        if (winner) {
            setWinningBid(winner)
            setActiveAnchor(winner)
        }
    }, [scrollContext.bids, setActiveAnchor])

    return <div
        className="article-nav"
        ref={articleNavEl}
    >
        {titles.length ? <>
            <span className="article-nav__title">
                {t('On this page')}
            </span>
            <span
                className="article-nav__progress"
                style={{
                    translate: `0 ${progressTop}px`,
                    height: progressHeight
                }}
            ></span>
            <ul className="article-nav__list">
                {titles.map((title, key) => <li
                    key={key}
                    className="article-nav__item"
                >
                    <a
                        ref={(r) => {
                            anchorEls.current[title.id] = r
                        }}
                        className={`article-nav__link article-nav__link--level-${title.level}${title.id === winningBid ? ' article-nav__link--current' : ''}`}
                        href={`#${slugify(title.title ?? '')}`}
                        onClick={(event) => scrollToAnchor(event, title.id)}
                    >
                        {title.title}
                    </a>
                </li>)}
            </ul>
        </> : null}
        <div className="article-nav__toplink-container">
            <button
                className="article-nav__toplink"
                onClick={scrollToTop}
            >
                <span>
                    {t('Scroll to top')}
                </span>
            </button>
        </div>
    </div>
}

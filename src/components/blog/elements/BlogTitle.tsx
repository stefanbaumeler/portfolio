'use client'

import { slugify } from '@/helpers/slug'
import { TBlogTitle } from '~/schema'
import Icon from '@mdi/react'
import * as Icons from '@mdi/js'
import { JSX, useRef } from 'react'
import { useScrollContext } from '@/context/scroll'
import { useOnScroll } from '@/helpers/scroll'

type Props = {
	item: TBlogTitle
}

export const BlogTitle = ({ item }: Props) => {
    const rootEl = useRef<HTMLDivElement>(null)

    const Tag = `h${item.level}` as keyof JSX.IntrinsicElements
    const slug = slugify(item.title ?? '')
    const scrollContext = useScrollContext()

    const onScroll = () => {
        if (rootEl.current) {
            const offset = rootEl.current.offsetTop + rootEl.current.clientHeight / 2 - 50 - window.scrollY
            scrollContext.updateBid({
                id: item.id,
                offset: Math.abs(offset),
                direction: offset > 0 ? 1 : -1
            })
        }
        else {
            scrollContext.removeBid(item.id)
        }
    }

    useOnScroll(onScroll, true)

    return <div ref={rootEl}>
        <Tag
            className={`content__title content__title--level-${item.level}`}
            id={slug}
        >
            {item.title}
            <a
                href={`#${slug}`}
                aria-label={`Link for ${item.title}`}
                className="content__hash"
            >
                <Icon path={Icons.mdiPound} />
            </a>
        </Tag>
    </div>
}

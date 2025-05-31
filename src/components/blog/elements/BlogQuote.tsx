import { TBlogQuote } from '~/schema'
import Link from 'next/link'

type Props = {
    item: TBlogQuote
}

export const BlogQuote = ({ item }: Props) => {
    return <div className="quote">
        <div className="quote__text">
            {item.text}
        </div>
        {item.author ? <>
            {item.url ? <Link href={item.url}>
                {item.author}
            </Link> : <div className="quote__author">
                {item.author}
            </div>}
        </> : null}
    </div>
}

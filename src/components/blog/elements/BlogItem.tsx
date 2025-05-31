import { BlogText } from '@/components/blog/elements/BlogText'
import { BlogImage } from '@/components/blog/elements/BlogImage'
import { BlogTitle } from '@/components/blog/elements/BlogTitle'
import { TBlogImage, TBlogQuote, TBlogText, TBlogTitle, TSecretBlogElements } from '~/schema'
import { BlogQuote } from '@/components/blog/elements/BlogQuote'

type Props = {
    element?: TSecretBlogElements
    index: number
}
export const BlogItem = ({
    element,
    index
}: Props) => {
    switch (element?.collection) {
    case 'blog_title':
        return <BlogTitle item={element.item as TBlogTitle} />
    case 'blog_text':
        return <BlogText item={element.item as TBlogText} />
    case 'blog_quote':
        return <BlogQuote item={element.item as TBlogQuote} />
    case 'blog_image':
        return <BlogImage
            item={element.item as TBlogImage}
            index={index}
        />
    }

    return <></>
}

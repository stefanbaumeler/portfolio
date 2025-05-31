import { BlogText } from '@/components/blog/elements/BlogText'
import { BlogImage } from '@/components/blog/elements/BlogImage'
import { BlogTitle } from '@/components/blog/elements/BlogTitle'
import { TBlogImage, TBlogQuote, TBlogText, TBlogTitle, TSecretBlogElements } from '~/schema'
import { BlogQuote } from '@/components/blog/elements/BlogQuote'
import { getAspectRatioOfSVG } from '@/helpers/svg'

type Props = {
    element?: TSecretBlogElements
    index: number
}
export const BlogItem = async ({
    element,
    index
}: Props) => {
    let aspect: number | undefined = undefined

    if (element?.collection === 'blog_image') {
        const e = element.item as TBlogImage
        console.log(e.image.type)
        if (e.image.type === 'image/svg+xml') {
            const res = await getAspectRatioOfSVG(`${process.env.NEXT_PUBLIC_ASSETS}/${e.image?.filename_disk}`)
            aspect = res?.aspectRatio
        }
    }

    switch (element?.collection) {
    case 'blog_title':
        return <BlogTitle item={element.item as TBlogTitle} />
    case 'blog_text':
        return <BlogText item={element.item as TBlogText} />
    case 'blog_quote':
        return <BlogQuote item={element.item as TBlogQuote} />
    case 'blog_image':
        return <BlogImage
            aspect={aspect}
            item={element.item as TBlogImage}
            index={index}
        />
    }

    return <></>
}

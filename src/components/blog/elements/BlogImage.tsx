import { Image } from '@/components/global/Image'
import { TBlogImage } from '~/schema'
import { DarkMode } from '@/context/dark'
import { BlogImagePopup } from '@/components/blog/elements/BlogImagePopup'
import { BlogImageImage } from '@/components/blog/elements/BlogImageImage'
import { headers } from 'next/headers'

type Props = {
    item: TBlogImage
    index: number
    aspect?: number
}

export const BlogImage = async ({
    item, index, aspect
}: Props) => {
    const headersList = await headers()
    const theme = headersList.get('Sec-CH-Prefers-Color-Scheme')

    return <>
        <BlogImageImage item={item}>
            <Image
                aspect={aspect ?? item.image?.width / item.image?.height ?? 1.5}
                invert={item.invert && theme === 'dark'}
                className="article__content-image"
                src={`${process.env.NEXT_PUBLIC_ASSETS}/${item.image?.filename_disk}`}
                alt={item.caption ?? ''}
                fill
                sizes="(max-width: 767px) calc(100vw - 20px), (max-width: 1023px) calc(100vw - 130px), (max-width: 1199px) calc(100vw - 180px), (max-width: 1375px) calc(100vw - 530px), 850px"
                loading={index < 3 ? 'eager' : 'lazy'}
            />
        </BlogImageImage>
        <BlogImagePopup
            item={item}
            index={index}
        >
            <Image
                blur={false}
                invert={item.invert}
                className="popup__image"
                src={`${process.env.NEXT_PUBLIC_ASSETS}/${item.image?.filename_disk}`}
                alt={item.caption ?? ''}
                fill
                sizes="calc(100vw - 180px)"
                loading="lazy"
            />
        </BlogImagePopup>
    </>
}

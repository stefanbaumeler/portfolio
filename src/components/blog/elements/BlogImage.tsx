import { Image } from '@/components/global/Image'
import { TBlogImage } from '~/schema'

type Props = {
	item: TBlogImage
	index: number
}

export const BlogImage = ({
    item, index
}: Props) => {
    return <figure>
        <Image
            className="article__content-image"
            src={`${process.env.NEXT_PUBLIC_ASSETS}/${item.image?.filename_disk}`}
            alt={item.caption ?? ''}
            fill
            sizes="(max-width: 767px) calc(100vw - 20px), (max-width: 1023px) calc(100vw - 130px), (max-width: 1679px) calc(100vw - 180px), 1500px"
            loading={index < 3 ? 'eager' : 'lazy'}
            quality={75}
        />
        <figcaption className="article__caption">
            {item.caption}
        </figcaption>
    </figure>
}

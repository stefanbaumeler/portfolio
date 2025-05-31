import { Link } from '../global/Link'
import { TQRoot } from '~/schema'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { BlogMeta } from '@/components/blog/BlogMeta'

type Props = {
    data?: TQRoot
}
export const Blogs = async ({ data }: Props) => {
    const t = await getTranslations()

    return <section className="blogs">
        <Link
            className="blogs__blog"
            prefetch
            href="/blog/travel"
        >
            <Image
                className="blogs__image"
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) calc(100vw - 80px), (max-width: 1679px) calc(50vw - 80px), 1500px"
                src={`${process.env.NEXT_PUBLIC_ASSETS}/${data?.website?.travel_blog_image.filename_disk}`}
                alt=""
                loading="eager"
                priority
                quality={75}
            />
            <div className="blogs__content">
                <h1 className="blogs__title">
                    {`${t('Travel Blog')}`}
                </h1>
                <span className="blogs__meta">
                    <BlogMeta
                        years="2015 – 2017"
                        posts={data?.secret_blog_aggregated[0]?.count.id}
                        language="Deutsch"
                    />
                </span>
            </div>
        </Link>
        <Link
            className="blogs__blog"
            prefetch
            href="/blog/dev"
        >
            <Image
                className="blogs__image"
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) calc(100vw - 80px), (max-width: 1679px) calc(50vw - 80px), 1500px"
                src={`${process.env.NEXT_PUBLIC_ASSETS}/${data?.website?.dev_blog_image.filename_disk}`}
                alt=""
                loading="eager"
                priority
                quality={75}
            />
            <div className="blogs__content">
                <h1 className="blogs__title">
                    Dev Blog
                </h1>
                <span className="blogs__meta">
                    <BlogMeta
                        years={`2025 – ${t('present')}`}
                        posts={data?.blog_aggregated[0]?.count.id}
                        language="English"
                    />
                </span>
            </div>
        </Link>
    </section>
}

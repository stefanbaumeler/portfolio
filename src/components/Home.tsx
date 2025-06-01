import { TQRoot } from '~/schema'
import { dt } from '@/helpers/translate'
import { getLocale } from 'next-intl/server'
import Image from 'next/image'

type Props = {
    website?: TQRoot['website']
}

export const Home = async ({ website }: Props) => {
    const locale = await getLocale()

    return <section className="home">
        <div className="home__content">
            <h1 className="home__title">
                {dt(website, 'home_title', locale)}
            </h1>
            <div className="home__text">
                {dt(website, 'home_text', locale)}
            </div>
        </div>
        <div className="home__image-container">
            <Image
                className="home__image"
                fill
                sizes="(max-width: 767px) calc(100vw - 20px), (max-width: 1023px) calc(100vw - 130px), 100vh"
                src={`${process.env.NEXT_PUBLIC_ASSETS}/${website?.home_image.filename_disk}`}
                alt="Stefan Baumeler"
                loading="eager"
                priority
                quality={75}
            />
        </div>
    </section>
}

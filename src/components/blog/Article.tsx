import { BlogItem } from '@/components/blog/elements/BlogItem'
import { ArticleNav } from '@/components/blog/ArticleNav'
import { HoverLink } from '@/components/global/HoverLink'
import * as Icons from '@mdi/js'
import { Image } from '@/components/global/Image'
import { TBlogTitle,
    TQTravelArticle,
    TQDevArticle,
    TSecretBlogElements,
    TQTravelPrevNextArticles, TQDevPrevNextArticles } from '~/schema'
import { ArticleMeta } from '@/components/blog/ArticleMeta'
import { getLocale, getTranslations } from 'next-intl/server'
import { isTravelArticle } from '@/helpers/article-type'
import { SliderProvider } from '@/context/slider'

type Props = {
	article: TQTravelArticle['secret_blog'][number] | TQDevArticle['blog'][number]
	prev?: TQTravelPrevNextArticles['previous'][number] | TQDevPrevNextArticles['previous'][number]
	next?: TQTravelPrevNextArticles['next'][number] | TQDevPrevNextArticles['next'][number]
}

export const Article = async ({
    article, prev, next
}: Props) => {
    const titles = article.elements?.filter((el) => el?.collection === 'blog_title').map((el) => el?.item ?? undefined)
    const type = isTravelArticle(article) ? 'travel' : 'dev'
    const t = await getTranslations()
    const locale = await getLocale()

    return <SliderProvider>
        <div className="article">
            <h1
                className="article__title article__title--level-1"
                dangerouslySetInnerHTML={{
                    __html: article.title
                }}
            />
            <ArticleMeta
                className="article__meta"
                article={article}
                locale={locale}
                t={t}
            />
            {isTravelArticle(article) ? <Image
                className="article__image"
                fill
                decoding="sync"
                alt=""
                sizes="(max-width: 767px) calc(100vw - 20px), (max-width: 1023px) calc(100vw - 130px), (max-width: 1679px) calc(100vw - 180px), 1500px"
                src={`${process.env.NEXT_PUBLIC_ASSETS}/${article.image?.filename_disk}`}
                loading="eager"
                priority
                quality={75}
            /> : null}
            <div className="article__content-container">
                <div className="article__content">
                    {article.elements?.map((element, key) => <div
                        className="article__element"
                        key={key}
                    >
                        <BlogItem
                            element={element as TSecretBlogElements}
                            index={key}
                        />
                    </div>)}
                    <div className="article__footer">
                        {prev ? <HoverLink
                            className="article__footer-link article__footer-link--prev"
                            image={isTravelArticle(prev) && prev.image?.filename_disk ? prev.image.filename_disk : undefined}
                            href={`/blog/${type}/${prev.slug}`}
                            title={prev.title}
                            label={t('Previous Post')}
                            icon={Icons.mdiChevronLeft}
                        /> : null}
                        {next ? <HoverLink
                            className="article__footer-link article__footer-link--next"
                            image={isTravelArticle(next) && next.image?.filename_disk ? next.image.filename_disk : undefined}
                            href={`/blog/${type}/${next.slug}`}
                            title={next.title}
                            label={t('Next Post')}
                            icon={Icons.mdiChevronRight}
                            iconPosition="after"
                        /> : null}
                    </div>
                </div>
                <aside className="article__sidebar">
                    <div className="article__sidebar-content">
                        <ArticleNav titles={titles as TBlogTitle[]} />
                    </div>
                </aside>
            </div>
        </div>
    </SliderProvider>
}

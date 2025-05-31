import Icon from '@mdi/react'
import * as Icons from '@mdi/js'
import { getTranslations } from 'next-intl/server'

type Props = {
    years: string
    posts?: number
    language: string
}

export const BlogMeta = async ({
    years, posts, language
}: Props) => {
    const t = await getTranslations()

    return <div className="meta">
        <span className="meta__item">
            <Icon
                className="meta__icon"
                path={Icons.mdiClockOutline}
            />
            <span>
                {years}
            </span>
        </span>
        <span className="meta__separator" />
        <span className="meta__item">
            <Icon
                className="meta__icon"
                path={Icons.mdiContentCopy}
            />
            {`${posts ?? 0} ${t('Posts')}`}
        </span>
        <span className="meta__separator" />
        <span className="meta__item">
            <Icon
                className="meta__icon"
                path={Icons.mdiTranslate}
            />
            {language}
        </span>
    </div>
}

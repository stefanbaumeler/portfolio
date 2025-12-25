import { getTranslations } from 'next-intl/server'
import { Link } from '@/components/global/Link'
import * as Icons from '@mdi/js'
import Icon from '@mdi/react'

const NotFound = async () => {
    const t = await getTranslations()
    return <div className="not-found">
        <h1 className="not-found__title">
            404
        </h1>
        <h2 className="not-found__subtitle">
            {t('Not all those who wander are lost, but you certainly are')}
        </h2>
        <Link
            href="/"
            className="view-button"
        >
            <span className="view-button__back">
                <Icon
                    className="view-button__icon"
                    path={Icons.mdiArrowLeft}
                />
            </span>
            <span className="view-button__text">
                {t('Go home')}
            </span>
        </Link>
    </div>
}

export default NotFound

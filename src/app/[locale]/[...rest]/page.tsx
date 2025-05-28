import { getTranslations } from 'next-intl/server'
import { Link } from '@/components/global/Link'

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
            className="not-found__button"
        >
            {t('Go home')}
        </Link>
    </div>
}

export default NotFound

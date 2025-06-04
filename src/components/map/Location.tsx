import { useLocale } from 'next-intl'

type Props = {
    title: string
    code?: string
    name: string
    date: Date
    showTime?: boolean
}

export const Location = ({
    title, code, name, date, showTime
}: Props) => {
    const locale = useLocale()

    return <div className="location">
        <h3 className="location__title">
            {title}
        </h3>
        {code ? <span className="location__code">
            {code}
        </span> : null}
        <div className="location__name">
            {name}
        </div>
        <div className="location__date">
            {
                date.toString() === 'Invalid Date' ? '' : date.toLocaleString(locale, {
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit'
                })
            }
        </div>
        {showTime ? <div className="location__time">
            {
                date.toString() === 'Invalid Date' ? '' : date.toLocaleString(locale, {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true
                })
            }
        </div> : null}
    </div>
}

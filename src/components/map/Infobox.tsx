import { yearColors } from '@/helpers/year-colors'
import { useEffect, useState } from 'react'
import Icon from '@mdi/react'
import { mdiClose, mdiInformationSlabCircle } from '@mdi/js'
import { TQMap } from '~/schema'
import { useLocale, useTranslations } from 'next-intl'
import { dt } from '@/helpers/translate'

type Props = {
    transportation: TQMap['transportation']
    onMouseEnterYear?: (year: string) => void
    onMouseLeaveYear?: (year: string) => void
    activeTransport?: TQMap['transportation'][number]
    activePlace?: TQMap['place'][number]
}

export const Infobox = ({
    transportation, onMouseEnterYear, onMouseLeaveYear, activeTransport, activePlace
}: Props) => {
    const [active, setActive] = useState(false)
    const t = useTranslations()
    const locale = useLocale()

    const sortedTransport = transportation.sort((a, b) => {
        return +new Date(a.arrival) - +new Date(b.arrival)
    })

    const lastPlace = sortedTransport[sortedTransport.length - 1]?.to
    const availableYears = Object.entries(yearColors).filter(([key]) => {
        return +new Date() - +new Date(key) > 0
    })

    const half = Math.ceil(availableYears.length / 2)

    useEffect(() => {
        if (!!activePlace || !!activeTransport) {
            setActive(false)
        }
    }, [activePlace, activeTransport])

    return <div className={`infobox${active ? ' infobox--active' : ''}`}>
        <button
            className="infobox__toggle"
            onClick={() => setActive(!active)}
        >
            <Icon
                path={active ? mdiClose : mdiInformationSlabCircle}
                size={1 + 1 / 3}
            />
        </button>
        <div className="infobox__container">
            <div className="infobox__content">
                <div className="infobox__fact">
                    <span className="infobox__tagline">
                        {t('Current location')}
                    </span>
                    <span className="infobox__text">
                        {`${dt(lastPlace, 'name', locale)}, ${dt(lastPlace?.country, 'name', locale)}`}
                    </span>
                </div>
                <span className="infobox__tagline">
                    {t('Years active')}
                </span>
                <ul className="infobox__years">
                    {availableYears.map(([year, color], key) => {
                        return <li
                            className="infobox__year"
                            onMouseEnter={() => onMouseEnterYear?.(year)}
                            onMouseLeave={() => onMouseLeaveYear?.(year)}
                            key={key}
                            style={{
                                gridColumn: key < half ? 1 : 2
                            }}
                        >
                            <span
                                className="infobox__color"
                                style={{
                                    backgroundColor: color
                                }}
                            />
                            {year}
                        </li>
                    })}
                </ul>
            </div>
        </div>
    </div>
}

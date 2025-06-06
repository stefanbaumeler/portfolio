import { Tooltip } from '@/components/global/Tooltip'
import { dt } from '@/helpers/translate'
import { useLocale } from 'next-intl'
import { TQMap } from '~/schema'
import { CSSProperties, MouseEvent, useEffect, useState } from 'react'
import { yearColors } from '@/helpers/year-colors'

type Props = {
    transportation: TQMap['transportation']
    place: TQMap['place'][number]
    onClick: (event: MouseEvent) => void
    activePlaceId?: string
    activeYear?: string
}
export const Marker = ({
    place, onClick, activePlaceId, transportation, activeYear
}: Props) => {
    const locale = useLocale()
    const [isActiveYear, setIsActiveYear] = useState(false)

    const firstArrival = transportation.filter((transport) => {
        return transport.to.id === place.id
    }).sort((a, b) => +new Date(a.arrival) - +new Date(b.arrival))[0]

    const year = new Date(firstArrival?.arrival).getFullYear()

    useEffect(() => {
        setIsActiveYear(activeYear === new Date(firstArrival?.arrival).getFullYear().toString())
    }, [activeYear])

    return <Tooltip
        content={dt(place, 'name', locale)}
        placement="top"
        className="map__marker-container"
        tooltipClass={`map__tooltip${activePlaceId === place.id ? ' map__tooltip--force' : ''}`}
        forceOpen={activePlaceId === place.id}
    >
        <div
            style={{
                '--c-marker': yearColors[year]
            } as CSSProperties}
            className={`map__marker${activePlaceId === place.id ? ' map__marker--active' : ''}${isActiveYear ? ' map__marker--active-year' : ''}`}
            onClick={onClick}
        />
    </Tooltip>
}

import { Tooltip } from '@/components/global/Tooltip'
import { dt } from '@/helpers/translate'
import { useLocale } from 'next-intl'
import { TQMap } from '~/schema'
import { MouseEvent } from 'react'

type Props = {
    place: TQMap['place'][number]
    onClick: (event: MouseEvent) => void
    activePlaceId?: string
}
export const Marker = ({
    place, onClick, activePlaceId
}: Props) => {
    const locale = useLocale()

    return <Tooltip
        content={dt(place, 'name', locale)}
        placement="top"
        className="map__marker-container"
        tooltipClass={`map__tooltip${activePlaceId === place.id ? ' map__tooltip--force' : ''}`}
        forceOpen={activePlaceId === place.id}
    >
        <div
            className={`map__marker${activePlaceId === place.id ? ' map__marker--active' : ''}`}
            onClick={onClick}
        />
    </Tooltip>
}

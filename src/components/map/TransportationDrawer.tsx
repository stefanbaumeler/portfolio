import { useEffect, useState } from 'react'
import { TQMap } from '~/schema'
import { dt } from '@/helpers/translate'
import { useLocale } from 'next-intl'

type Props = {
    activeTransportation: TQMap['transportation'][number]
}

export const TransportationDrawer = ({ activeTransportation }: Props) => {
    const [active, setActive] = useState(false)
    const locale = useLocale()

    useEffect(() => {
        if (activeTransportation) {
            setActive(true)
        }
    }, [activeTransportation])

    return <div className={`drawer${active ? ' drawer--active' : ''}`}>
        <h2 className="drawer__title">
            {`${dt(activeTransportation.from, 'name', locale)} - ${dt(activeTransportation.to, 'name', locale)}`}
        </h2>
    </div>
}

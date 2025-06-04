import { TQMap } from '~/schema'
import { dt } from '@/helpers/translate'
import { useLocale, useTranslations } from 'next-intl'
import { Drawer } from '@/components/map/Drawer'
import { useEffect, useState } from 'react'
import { Location } from '@/components/map/Location'
import Icon from '@mdi/react'
import { mdiAirplane,
    mdiBicycle,
    mdiBus,
    mdiCar,
    mdiFerry, mdiHiking,
    mdiMotorbike,
    mdiTaxi,
    mdiTrain } from '@mdi/js'

type Props = {
    activeTransport?: TQMap['transportation'][number]
    onClose: () => void
}

export const TransportationDrawer = ({
    activeTransport, onClose
}: Props) => {
    const locale = useLocale()
    const t = useTranslations()
    const [title, setTitle] = useState('')
    const [icon, setIcon] = useState('')

    useEffect(() => {
        switch (activeTransport?.type) {
        case 'flight':
            setIcon(mdiAirplane)
            break
        case 'bicycle':
            setIcon(mdiBicycle)
            break
        case 'bus':
            setIcon(mdiBus)
            break
        case 'car':
            setIcon(mdiCar)
            break
        case 'foot':
            setIcon(mdiHiking)
            break
        case 'motorcycle':
            setIcon(mdiMotorbike)
            break
        case 'ship':
            setIcon(mdiFerry)
            break
        case 'taxi':
            setIcon(mdiTaxi)
            break
        case 'train':
            setIcon(mdiTrain)
            break
        }
    }, [activeTransport?.type])

    useEffect(() => {
        const from = dt(activeTransport?.from, 'name', locale)
        const to = dt(activeTransport?.to, 'name', locale)
        setTitle(from && to ? `${from} – ${to}` : '')
    }, [activeTransport?.from, activeTransport?.to])

    return activeTransport ? <Drawer
        type="transportation"
        onClose={onClose}
        activeObject={activeTransport}
        title={title}
        subtitle={activeTransport.type ? t(activeTransport.type) : undefined}
    >
        <div className="drawer__content">
            <div className="journey">
                <Location
                    title={t('From')}
                    code={activeTransport.departure_airport_code}
                    name={dt(activeTransport.from, 'name', locale)}
                    date={new Date(activeTransport.departure)}
                    showTime={activeTransport.show_time}
                />
                <Icon
                    path={icon}
                    className="journey__icon"
                />
                <Location
                    title={t('To')}
                    code={activeTransport.arrival_airport_code}
                    name={dt(activeTransport.to, 'name', locale)}
                    date={new Date(activeTransport.arrival)}
                    showTime={activeTransport.show_time}
                />
            </div>
            <div className="drawer__footer">
                <div className="drawer__fact">
                    <span className="drawer__tagline">
                        {t('Passenger')}
                    </span>
                    <span className="drawer__text">
                        Stefan Baumeler
                    </span>
                </div>
                {activeTransport.company ? <div className="drawer__fact">
                    <span className="drawer__tagline">
                        {t(activeTransport.type)}
                    </span>
                    <span className="drawer__text">
                        {`${activeTransport.company} ${activeTransport.number ?? ''}`}
                    </span>
                </div> : null}
                {activeTransport.vessel ? <div className="drawer__fact">
                    <span className="drawer__tagline">
                        {t('Vessel')}
                    </span>
                    <span className="drawer__text">
                        {activeTransport.vessel}
                    </span>
                </div> : null}
            </div>
        </div>
    </Drawer> : null
}

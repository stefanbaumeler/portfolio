import { recursivelyCleanDaytrips } from '@/helpers/clean-daytrips'
import { TQMap } from '~/schema'

export const getVisits = (transportation: TQMap['transportation'], activePlaceId?: string) => {
    const arrivals = transportation.filter((transport) => {
        return transport.to.id === activePlaceId
    })

    const departures = transportation.filter((transport) => {
        return transport.from.id === activePlaceId
    })

    const rawVisits = arrivals.map((arrival) => {
        const departure = departures
            .filter((departure) => +new Date(arrival.arrival) - +new Date(departure.departure) <= 0)
            .sort((a, b) => +new Date(a.departure) - +new Date(b.departure))[0]

        return [new Date(arrival.arrival), new Date(departure?.departure)]
    }).sort((a, b) => +(a[0] ?? 0) - +(b[0] ?? 0))

    const visits = recursivelyCleanDaytrips(rawVisits as [Date, Date][])

    return {
        visits
    }
}

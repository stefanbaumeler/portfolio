import { TQTimePerPlace } from '~/schema'

export const durationOfStays = (enter: TQTimePerPlace['timePerCountryAndPlace'], leave: Date[]) => {
    return enter.map((arrival) => {
        const arrivalDate = new Date(arrival.arrival)
        const departureDate = leave.find((leaveDate) => +leaveDate > +arrivalDate)

        return departureDate ? Math.round((+departureDate - +arrivalDate) / (1000 * 60 * 60 * 24)) : 0
    })
}

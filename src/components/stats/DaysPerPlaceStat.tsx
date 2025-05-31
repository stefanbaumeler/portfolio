import { getClient } from '@/gql/urql'
import { Stat } from '@/components/stats/Stat'
import { getLocale, getTranslations } from 'next-intl/server'
import { QTimePerPlaceDocument, TQTimePerPlace } from '~/schema'
import { dt } from '@/helpers/translate'
import { BarChart } from '@/components/charts/BarChart'
import { durationOfStays } from '@/helpers/duration-of-stays'

type Props = {
	order: number
}

export const DaysPerPlaceStat = async ({ order }: Props) => {
    const locale = await getLocale()
    const t = await getTranslations()
    const { data } = await getClient().query<TQTimePerPlace>(QTimePerPlaceDocument, {})

    const placeDurations = data?.place
        .map((place) => {
            if (place.country.id === '39') { // Exclude Switzerland
                return {
                    ...place,
                    duration: 0
                }
            }

            const enter = data?.timePerCountryAndPlace
                .filter((transportation) => transportation.to.id === place.id && transportation.from.id !== place.id) ?? []

            const leave = data?.timePerCountryAndPlace
                .filter((transportation) => transportation.to.id !== place.id && transportation.from.id === place.id)
                .map((transportation) => new Date(transportation.departure))
                .sort((a, b) => +a - +b)

            const stays = durationOfStays(enter, leave)

            return {
                ...place,
                duration: stays.length ? stays.reduce((acc, curr) => acc + curr) : 0
            }
        })
        .sort((a, b) => b.duration - a.duration)
        .slice(0, 20)

    const chart = {
        labels: placeDurations?.map((country) => dt(country, 'name', locale)),
        datasets: [
            {
                data: placeDurations?.map((country) => country.duration)
            }
        ]
    }

    return <Stat
        title={t('Days per place')}
        type="bar"
        order={order}
    >
        <BarChart data={chart} />
    </Stat>
}

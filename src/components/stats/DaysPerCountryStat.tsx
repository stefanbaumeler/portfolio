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

export const DaysPerCountryStat = async ({ order }: Props) => {
    const locale = await getLocale()
    const t = await getTranslations()
    const { data } = await getClient().query<TQTimePerPlace>(QTimePerPlaceDocument, {})

    const countryDurations = data?.country
        .map((country) => {
            if (country.id === '39') { // Exclude Switzerland
                return {
                    ...country,
                    duration: 0
                }
            }

            const enter = data?.timePerCountryAndPlace
                .filter((transportation) => transportation.to.country.id === country.id && transportation.from.country.id !== country.id) ?? []

            const leave = data?.timePerCountryAndPlace
                .filter((transportation) => transportation.to.country.id !== country.id && transportation.from.country.id === country.id)
                .map((transportation) => new Date(transportation.departure))
                .sort((a, b) => +a - +b)

            const stays = durationOfStays(enter, leave)

            return {
                ...country,
                duration: stays.length ? stays.reduce((acc, curr) => acc + curr) : 0
            }
        })
        .sort((a, b) => b.duration - a.duration)
        .slice(0, 20)

    const chart = {
        labels: countryDurations?.map((country) => dt(country, 'name', locale)),
        datasets: [
            {
                data: countryDurations?.map((country) => country.duration)
            }
        ]
    }

    return <Stat
        title={t('Days per country')}
        type="bar"
        order={order}
    >
        <BarChart data={chart} />
    </Stat>
}

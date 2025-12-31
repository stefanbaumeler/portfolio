import { getClient } from '@/gql/urql'
import { BarChart } from '@/components/charts/BarChart'
import gql from 'graphql-tag'
import { Stat } from '@/components/stats/Stat'
import { getTranslations } from 'next-intl/server'

type Props = {
    order: number
}

export const FlightsPerYearStat = async ({ order }: Props) => {
    const t = await getTranslations()

    const currentYear = new Date().getFullYear()
    const years = []

    for (let y = 2015; y <= currentYear; y++) {
        years.push(y)
    }

    const { data } = await getClient().query<{ [key: string]: { id: string }[] }>(gql`
        query QFlightsPerYear {
            ${years.map((year) => `y${year}: transportation(
        		filter: { departure_func: { year: { _eq: "${year}" } }, type: { _eq: "flight" } }
			) {
				id
			}`)}
        }
	`, {})

    const chart = {
        labels: Object.keys(data ?? {}).map((key) => key.substring(1)),
        datasets: [
            {
                data: Object.values(data ?? {}).map((value) => value.length)
            }
        ]
    }

    return <Stat
        title={t('Flights per year')}
        type="bar"
        order={order}
    >
        <BarChart data={chart} />
    </Stat>
}

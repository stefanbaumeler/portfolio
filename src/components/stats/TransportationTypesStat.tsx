import { getClient } from '@/gql/urql'
import { QTransportationTypesDocument, TQTransportationTypes } from '~/schema'
import { getTranslations } from 'next-intl/server'
import { DonutChart } from '@/components/charts/DonutChart'
import { Stat } from '@/components/stats/Stat'

type Props = {
	order: number
}

export const TransportationTypesStat = async ({ order }: Props) => {
    const t = await getTranslations()
    const { data } = await getClient().query<TQTransportationTypes>(QTransportationTypesDocument, {})

    const chart = {
        labels: data?.transportationTypes.map((transportationType) => t(transportationType.group.type)),
        datasets: [
            {
                data: data?.transportationTypes.map((transportationType) => transportationType.count.id)
            }
        ]
    }

    return <Stat
        title={t('Transportation by type')}
        type="donut"
        order={order}
    >
        <DonutChart data={chart} />
    </Stat>
}

import { getClient } from '@/gql/urql'
import { QAccommodationTypeDocument,
    TQAccommodationType } from '~/schema'
import { getTranslations } from 'next-intl/server'
import { DonutChart } from '@/components/charts/DonutChart'
import { Stat } from '@/components/stats/Stat'

type Props = {
	order: number
}

export const AccommodationTypesStat = async ({ order }: Props) => {
    const t = await getTranslations()
    const { data } = await getClient().query<TQAccommodationType>(QAccommodationTypeDocument, {})

    const chart = {
        labels: data?.accommodationType.map((accommodationType) => t(accommodationType.group.type)),
        datasets: [
            {
                data: data?.accommodationType.map((accommodationType) => accommodationType.count.id)
            }
        ]
    }

    return <Stat
        title={t('Accommodation by type')}
        type="donut"
        order={order}
    >
        <DonutChart data={chart} />
    </Stat>
}

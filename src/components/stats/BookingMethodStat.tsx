import { getClient } from '@/gql/urql'
import { QBookingMethodDocument, TQBookingMethod } from '~/schema'
import { getTranslations } from 'next-intl/server'
import { DonutChart } from '@/components/charts/DonutChart'
import { Stat } from '@/components/stats/Stat'

type Props = {
	order: number
}

export const BookingMethodStat = async ({ order }: Props) => {
    const t = await getTranslations()
    const { data } = await getClient().query<TQBookingMethod>(QBookingMethodDocument, {})

    const chart = {
        labels: data?.bookingMethod.map((bookingMethod) => t(bookingMethod.group.booking)),
        datasets: [
            {
                data: data?.bookingMethod.map((bookingMethod) => bookingMethod.count.id)
            }
        ]
    }

    return <Stat
        title={t('Accommodation by booking method')}
        type="donut"
        order={order}
    >
        <DonutChart data={chart} />
    </Stat>
}

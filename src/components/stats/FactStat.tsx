import { Stat } from '@/components/stats/Stat'

type Props = {
    title: string
    value: string | number
    type: 'count' | 'text'
    valueSize?: 'small'
    order: number
}

export const FactStat = ({
    title, value, type, valueSize, order
}: Props) => {
    return <Stat
        title={title}
        type={type}
        order={order}
    >
        <div className={`stat__value${valueSize ? ` stat__value--${valueSize}` : ''}`}>
            {value}
        </div>
    </Stat>
}

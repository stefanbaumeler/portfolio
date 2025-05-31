import { ReactNode } from 'react'

type Props = {
	children: ReactNode
	title: string
	type: 'count' | 'text' | 'bar' | 'donut'
	order: number
}

export const Stat = ({
    children, title, type, order
}: Props) => {
    return <div className={`stat stat--${type} stat--${order}`}>
        <h2 className="stat__title">
            {title}
        </h2>
        <div className="stat__chart">
            {children}
        </div>
    </div>
}

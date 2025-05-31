import { createContext, ReactNode } from 'react'
import { ArcElement, BarElement, CategoryScale, Chart, LinearScale, Tooltip } from 'chart.js'

type Props = {
	children?: ReactNode
}

const ChartContext = createContext(null)

const ChartProvider = ({ children }: Props) => {
    Chart.register(CategoryScale)
    Chart.register(LinearScale)
    Chart.register(BarElement)
    Chart.register(ArcElement)
    Chart.register(Tooltip)

    return <ChartContext.Provider value={null}>
        {children}
    </ChartContext.Provider>
}

export { ChartProvider }

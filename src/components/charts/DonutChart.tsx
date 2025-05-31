'use client'

import { Doughnut } from 'react-chartjs-2'
import { ComponentProps } from 'react'

export const DonutChart = (props: ComponentProps<typeof Doughnut>) => {
    return <Doughnut
        {...props}
    />
}

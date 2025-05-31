'use client'

import { Bar } from 'react-chartjs-2'
import { ComponentProps } from 'react'

export const BarChart = (props: ComponentProps<typeof Bar>) => {
    return <Bar
        {...props}
    />
}

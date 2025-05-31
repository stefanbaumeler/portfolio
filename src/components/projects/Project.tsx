'use client'

import { CSSProperties, ReactNode, useState } from 'react'
import { TFProject } from '~/schema'
import { Slider } from '@/components/projects/Slider'
import { hexToHSL } from '@/helpers/hsl'

type Props = {
	project: TFProject
    children: ReactNode
}

export const Project = ({
    project, children
}: Props) => {
    const [sliderActive, setSliderActive] = useState(false)
    const projectHSL = hexToHSL(project.color)

    return <li
        className={`project${sliderActive ? ' project--active' : ''}`}
        style={{
            '--c-project': project.color,
            '--c-project-light': `hsl(${projectHSL.h}deg, ${projectHSL.s}%, ${projectHSL.l + (100 - projectHSL.l) / 3}%)`,
            '--c-project-lighter': `hsl(${projectHSL.h}deg, ${projectHSL.s}%, ${projectHSL.l === 0 ? 100 : projectHSL.l + (100 - projectHSL.l) / 5}%)`
        } as CSSProperties}
    >
        <Slider
            onSliderActiveChange={setSliderActive}
            gallery={project.gallery}
        />
        {children}
    </li>
}

import { CSSProperties } from 'react'

type Props = {
	technology: { label: string, secondary?: boolean }
	color: string | [string, string]
	k: number
}

export const Technology = ({
    technology, color, k
}: Props) => {
    const classes = ['project__technology']

    if (technology.secondary) {
        classes.push('project__technology--secondary')
    }
    return <li
        className={classes.join(' ')}
        style={{
            '--technologyId': `${k}`
        } as CSSProperties}
    >
        {technology.label}
    </li>
}

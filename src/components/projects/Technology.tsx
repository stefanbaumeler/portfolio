import { TFTechnology } from '~/schema'
import { dt } from '@/helpers/translate'
import { useLocale } from 'next-intl'
import { Tooltip } from '@/components/global/Tooltip'

type Props = {
	technology: TFTechnology
	color: string
	secondary: boolean
}

export const Technology = ({
    technology, secondary
}: Props) => {
    const locale = useLocale()

    const classes = ['project__technology']

    if (secondary) {
        classes.push('project__technology--secondary')
    }
    return <Tooltip
        tagName="li"
        className={classes.join(' ')}
        content={dt(technology, 'description', locale)}
        placement="top"
        tooltipClass="project__tooltip"
    >
        {technology.label}
    </Tooltip>
}

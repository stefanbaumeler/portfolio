import Icon from '@mdi/react'
import * as Icons from '@mdi/js'
import { getTranslations } from 'next-intl/server'
import { MouseEvent } from 'react'
import { useTranslations } from 'next-intl'

type Props = {
    onPrev: (event: MouseEvent) => void
    onClose: (event: MouseEvent) => void
    onNext: (event: MouseEvent) => void
}

export const SliderControls = ({
    onPrev, onClose, onNext
}: Props) => {
    const t = useTranslations()

    return <div className="slider-controls">
        <button
            className="slider-controls__control slider-controls__control--prev"
            aria-label={t('Slide to previous image')}
            onClick={onPrev}
        >
            <Icon
                className="slider-controls__icon"
                path={Icons.mdiArrowLeft}
            />
        </button>
        <button
            className="slider-controls__control slider-controls__control--close"
            aria-label={t('Close slider')}
            onClick={onClose}
        >
            <Icon
                className="slider-controls__icon"
                path={Icons.mdiClose}
            />
        </button>
        <button
            className="slider-controls__control slider-controls__control--next"
            aria-label={t('Slide to next image')}
            onClick={onNext}
        >
            <Icon
                className="slider-controls__icon"
                path={Icons.mdiArrowRight}
            />
        </button>
    </div>
}

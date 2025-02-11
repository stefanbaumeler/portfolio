import * as Icons from '@mdi/js'
import Icon from '@mdi/react'
import { useEffect } from 'react'
import { Tooltip } from './Tooltip'
import { DarkMode, useDarkContext } from '../context/dark'

type Props = {
	title?: string
}

export const TopNav = ({ title }: Props) => {
    const dark = useDarkContext()

    useEffect(() => {
        document.body.classList.toggle('body--dark', dark.state === DarkMode.Dark)
    }, [dark.state])

    return <div className="top-nav">
        {title ? <h1 className="top-nav__title">
            {title}
        </h1> : null}
        <nav className="top-nav__nav">
            <Tooltip
                label="Dark mode"
                placement="bottom"
                tooltipClass="top-nav__tooltip"
                className="top-nav__item"
            >
                <button
                    className="top-nav__button"
                    onClick={() => dark.setState(dark.state === DarkMode.Dark ? DarkMode.Light : DarkMode.Dark)}
                >
                    <Icon
                        path={dark.state ? Icons.mdiWhiteBalanceSunny : Icons.mdiMoonWaningCrescent}
                        className="top-nav__icon"
                    />
                </button>
            </Tooltip>
            <Tooltip
                label="Language"
                placement="bottom"
                tooltipClass="top-nav__tooltip"
                className="top-nav__item"
            >
                <button className="top-nav__button">
                    <Icon
                        path={Icons.mdiTranslate}
                        className="top-nav__icon"
                    />
                </button>
            </Tooltip>
        </nav>
    </div>
}

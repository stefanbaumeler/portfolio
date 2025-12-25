import { Link } from '@/components/global/Link'
import { Tooltip } from '@/components/global/Tooltip'
import { Image } from '@/components/global/Image'
import Icon from '@mdi/react'

type Props = {
	image?: string
	href: string
	title: string
	label: string
	icon?: string
    className?: string
	iconPosition?: 'before' | 'after'
}

export const HoverLink = ({
    image, href, title, label, icon, iconPosition = 'before', className = ''
}: Props) => {
    return <div
        className={`${className} hover-link`}
    >
        <Tooltip
            content={<div className="hover-link__content">
                {image ? <Image
                    className="hover-link__image"
                    alt=""
                    sizes="300px"
                    fill
                    src={`${process.env.NEXT_PUBLIC_ASSETS}/${image}`}
                    quality={75}
                /> : null}
                <span
                    className="hover-link__title"
                    dangerouslySetInnerHTML={{
                        __html: title
                    }}
                />
            </div>}
            placement="top"
            tooltipClass="hover-link__tooltip"
        >
            <Link
                className="hover-link__link"
                prefetch
                href={href}
            >
                {icon ? <Icon
                    path={icon}
                    className={`hover-link__icon hover-link__icon--${iconPosition}`}
                /> : null}
                <span>
                    {label}
                </span>
            </Link>
        </Tooltip>
    </div>
}

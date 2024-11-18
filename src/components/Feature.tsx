import { CSSProperties, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

type Props = {
	feature: string
	k: number
}

export const Feature = ({
    feature, k
}: Props) => {
    const container = useRef<HTMLLIElement>(null)

    useGSAP(() => {
        gsap.to('.project__feature', {
            scrollTrigger: {
                trigger: '.project__feature',
                start: 'center 90%',
                end: 'top 50%',
                scrub: 0.5
            },
            x: 0,
            opacity: 1
        })
    }, {
        scope: container
    })

    return <li ref={container}>
        <span
            className="project__feature"
            style={{
                '--featureId': `${k + 1}`
            } as CSSProperties}
        >
            {feature}
        </span>
    </li>
}

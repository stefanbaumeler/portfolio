import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ReactNode, useRef } from 'react'

export type TSkill = {
	name: string
	hint: string
	children: TSkill[] | undefined
	color: string
}

type Props = {
	skill: TSkill
	color: string
	child: boolean
}
export const Skill = ({
    skill, color, child
}: Props) => {
    const container = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        gsap.to('.skills__dot', {
            scrollTrigger: {
                trigger: '.skills__dot',
                start: 'bottom 97.5%',
                end: 'bottom 92.5%',
                scrub: 0.5
            },
            scale: 1
        })

        const lineTrigger = {
            scrollTrigger: {
                trigger: '.skills__line',
                start: `bottom ${child ? '95%' : '60%'}`,
                end: `bottom ${child ? '85%' : '50%'}`,
                scrub: 0.5
            }
        }

        const lineScale = child ? {
            scaleX: 1
        } : {
            scaleY: 1
        }

        gsap.to('.skills__line', {
            ...lineTrigger,
            ...lineScale
        })

        gsap.to('.skills__label', {
            scrollTrigger: {
                trigger: '.skills__label',
                start: 'bottom 95%',
                end: 'bottom 85%',
                scrub: 0.5
            },
            opacity: 1,
            x: 0
        })

        gsap.to('.skills__hint', {
            scrollTrigger: {
                trigger: '.skills__hint',
                start: 'bottom 95%',
                end: 'bottom 85%',
                scrub: 0.5
            },
            opacity: 1,
            x: 0
        })
    }, {
        scope: container,
        dependencies: [child]
    })
    const LiOrDiv = ({ children }: { children: ReactNode }) => {
        return child ? <li className="skills__skill">
            {children}
        </li> : <div className="skills__skill">
            {children}
        </div>
    }

    const H3OrH4 = ({ children }: { children: ReactNode }) => {
        return child ? <h4 className="skills__label-container">
            {children}
        </h4> : <h3 className="skills__label-container">
            {children}
        </h3>
    }

    return <LiOrDiv>
        <div ref={container}>
            <H3OrH4>
                <span className="skills__dot" />
                <span className="skills__line" />
                <span className="skills__label">
                    {skill.name}
                </span>
            </H3OrH4>
            <span className="skills__hint">
                {skill.hint}
            </span>
        </div>
        <ul className="skills__children">
            {skill.children?.map((skill, k) => <Skill
                child={true}
                skill={skill}
                color={skill.color || color}
                key={k}
            />)}
        </ul>
    </LiOrDiv>
}

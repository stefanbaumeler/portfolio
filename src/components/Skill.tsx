import { useRef } from 'react'

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
	delay?: number
}
export const Skill = ({
    skill, color, child, delay = 0
}: Props) => {
    const container = useRef<HTMLDivElement>(null)

    const LiOrDiv = child ? 'li' : 'div'
    const H3OrH4 = child ? 'h4' : 'h3'
    let childCount = 0
    const delayPerItem = 0.025

    return <LiOrDiv className="skills__skill">
        <div ref={container}>
            <H3OrH4 className="skills__label-container">
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
            {skill.children?.map((child, k) => {
                childCount += child.children?.length ?? 0

                return <Skill
                    delay={delay + (k + 1) * delayPerItem + (childCount - (child.children?.length ?? 0)) * delayPerItem}
                    child={true}
                    skill={child}
                    color={child.color || color}
                    key={k}
                />})}
        </ul>
    </LiOrDiv>
}

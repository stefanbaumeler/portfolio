import skills from '../data/skills'
import Masonry from 'react-masonry-css'
import { Skill, TSkill } from './Skill'
import { useRef } from 'react'

export const Skills = () => {
    const container = useRef<HTMLElement>(null)

    let childCount = 0
    const delayPerItem = 0.025

    return <section
        className="skills"
        ref={container}
    >
        <div className="skills__deco-lines">
            <div className="skills__deco-line"></div>
            <div className="skills__deco-line"></div>
            <div className="skills__deco-line"></div>
            <div className="skills__deco-line"></div>
            <div className="skills__deco-line"></div>
        </div>
        <div className="skills__content">
            <h2 className="skills__title">
				Skills
            </h2>
            <Masonry
                breakpointCols={{
                    default: 3,
                    767: 1
                }}
                className={'skills__skills'}
                columnClassName={'skills__column'}
            >
                {skills.map((skill, k) => {
                    let thisChildCount = skill.children.length

                    skill.children.forEach((child) => {
                        const c = child as TSkill
                        thisChildCount += c.children?.length ?? 0
                    })

                    childCount += thisChildCount

                    return <Skill
                        key={k}
                        skill={skill as TSkill}
                        color={skill.color || ''}
                        child={false}
                        delay={(childCount - thisChildCount) * delayPerItem}
                    />
                })}
            </Masonry>
        </div>
    </section>
}

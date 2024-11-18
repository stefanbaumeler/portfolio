import skills from '../data/skills'
import Masonry from 'react-masonry-css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Skill, TSkill } from './Skill'
import { useRef } from 'react'

export const Skills = () => {
    const container = useRef<HTMLElement>(null)

    useGSAP(() => {
        gsap.to('.skills__container', {
            scrollTrigger: {
                trigger: '.skills__container',
                start: 'bottom bottom',
                scrub: 0.5,
                pin: true,
                pinSpacing: false
            }
        })

        gsap.to('.skills__title', {
            scrollTrigger: {
                trigger: '.skills__title',
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
    return <section
        className="skills"
        ref={container}
    >
        <div className="skills__container">
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
                {skills.map((skill, k) =>
                    <Skill
                        key={k}
                        skill={skill as TSkill}
                        color={skill.color || ''}
                        child={false}
                    />
                )}
            </Masonry>
        </div>
    </section>
}

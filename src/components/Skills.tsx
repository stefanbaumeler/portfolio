import skills from '../data/skills'
import { ScrollTrigger, Tween } from 'react-gsap'
import Masonry from 'react-masonry-css'
import { ReactNode } from 'react'

type TSkill = {
    name: string
    hint: string
    children: TSkill[] | undefined
    color: string
}

export const Skills = () => {
    const Skill = ({
        skill, color, child
    }: { skill: TSkill, color: string, child: boolean } ) => {
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
            <H3OrH4>
                <ScrollTrigger
                    start={'bottom 97.5%'}
                    end={'bottom 92.5%'}
                    scrub={0.5}
                >
                    <Tween
                        to={{
                            scale: 1
                        }}
                    >
                        <span className="skills__dot" />
                    </Tween>
                </ScrollTrigger>
                <ScrollTrigger
                    start={`bottom ${child ? '95%' : '60%'}`}
                    end={`bottom ${child ? '85%' : '50%'}`}
                    scrub={0.5}
                >
                    <Tween
                        to={child ? {
                            scaleX: 1
                        } : {
                            scaleY: 1
                        }}
                    >
                        <span className="skills__line" />
                    </Tween>
                </ScrollTrigger>
                <ScrollTrigger
                    start={'bottom 95%'}
                    end={'bottom 85%'}
                    scrub={0.5}
                >
                    <Tween
                        to={{
                            opacity: 1,
                            x: 0
                        }}
                    >
                        <span className="skills__label">
                            {skill.name}
                        </span>
                    </Tween>
                </ScrollTrigger>
            </H3OrH4>
            <ScrollTrigger
                start={'bottom 95%'}
                end={'bottom 85%'}
                scrub={0.5}
            >
                <Tween
                    to={{
                        opacity: 1,
                        x: 0
                    }}
                >
                    <span className="skills__hint">
                        {skill.hint}
                    </span>
                </Tween>
            </ScrollTrigger>

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

    return <ScrollTrigger
        start={'bottom bottom'}
        scrub={0.5}
        pin={true}
        pinSpacing={false}
    >
        <Tween>
            <section className="skills">
                <div className="skills__container">
                    <ScrollTrigger
                        start={'center 90%'}
                        end={'top 50%'}
                        scrub={0.5}
                    >
                        <Tween
                            to={{
                                x: 0,
                                opacity: 1
                            }}
                        >
                            <h2 className="skills__title">
                                Skills
                            </h2>
                        </Tween>
                    </ScrollTrigger>
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
        </Tween>
    </ScrollTrigger>
}

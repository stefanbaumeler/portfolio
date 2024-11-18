import projects from '../data/work'
import { Project } from './Project'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

export const Projects = () => {
    const container = useRef<HTMLElement>(null)

    useGSAP(() => {
        gsap.to('.projects__list', {
            scrollTrigger: {
                trigger: '.projects__list',
                start: 'bottom bottom',
                scrub: 0.5,
                pin: true,
                pinSpacing: false
            }
        })
    }, {
        scope: container
    })

    return <section
        className="projects"
        ref={container}
    >
        <ul className="projects__list">
            {projects.map((project, key) => <Project
                key={key}
                project={project}
            />)}
        </ul>
    </section>
}

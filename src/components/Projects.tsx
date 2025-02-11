import projects from '../data/work'
import { Project } from './Project'
import { useRef } from 'react'

export const Projects = () => {
    const container = useRef<HTMLElement>(null)

    return <section
        className="projects"
        ref={container}
    >
        <h1 className="projects__title">
			Projects
        </h1>
        <ul className="projects__list">
            {projects.map((project, key) => <Project
                key={key}
                project={project}
            />)}
        </ul>
    </section>
}

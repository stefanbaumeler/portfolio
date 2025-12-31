import { Project } from './Project'
import { TQProjects } from '~/schema'
import { TopNav } from '@/components/global/nav/TopNav'

type Props = {
    projects: TQProjects['work'][number]['projects']
    title: string
    text: string
    type: string
}

export const Projects = async ({
    projects, title, text, type
}: Props) => {
    return <section
        className={`projects projects--${type}`}
    >
        <div className="projects__header">
            <h1 className="projects__title">
                {title}
            </h1>
            <div className="projects__text">
                {text}
            </div>
            <div className="projects__customize">
                <TopNav />
            </div>
        </div>
        <ul className="projects__list">
            {projects.map((project, key) => <Project
                key={key}
                project={project?.project_id}
            />)}
        </ul>
    </section>
}

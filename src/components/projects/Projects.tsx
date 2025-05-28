import { Project } from './Project'
import { useTranslations } from 'next-intl'
import { TQProjects } from '~/schema'
import { ProjectContent } from '@/components/projects/ProjectContent'

type Props = {
	projects: TQProjects['work'][number]['projects']
}

export const Projects = ({ projects }: Props) => {
    const t = useTranslations()

    return <section
        className="projects"
    >
        <h1 className="projects__title">
            {t('Projects')}
        </h1>
        <ul className="projects__list">
            {projects.map((project, key) => <Project
                key={key}
                project={project?.project_id}
            >
                <ProjectContent project={project?.project_id} />
            </Project>)}
        </ul>
    </section>
}

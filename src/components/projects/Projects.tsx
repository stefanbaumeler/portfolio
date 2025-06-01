import { Project } from './Project'
import { useTranslations } from 'next-intl'
import { TQProjects } from '~/schema'

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
            />)}
        </ul>
    </section>
}

import { Projects } from '@/components/projects/Projects'
import { getClient } from '@/gql/urql'
import { QProjectsDocument, TQProjects } from '~/schema'

const ProjectsPage = async () => {
    const { data } = await getClient().query<TQProjects>(QProjectsDocument, {})

    const projects = data?.work[0]?.projects

    return <Projects projects={projects ?? []} />
}

export default ProjectsPage

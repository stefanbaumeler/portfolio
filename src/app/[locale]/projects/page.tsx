import { Projects } from '@/components/projects/Projects'
import { getClient } from '@/gql/urql'
import { QProjectsDocument, TQProjects } from '~/schema'
import { getTranslations } from 'next-intl/server'

const WorkPage = async () => {
    const { data } = await getClient().query<TQProjects>(QProjectsDocument, {})
    const t = await getTranslations()

    const workProjects = data?.work[0]?.projects.filter((project) => project.project_id.type === 'work')
    const sideProjects = data?.work[0]?.projects.filter((project) => project.project_id.type === 'private')

    return <>
        <Projects
            projects={workProjects ?? []}
            title={t('Projects')}
            text={t('Work text')}
            type="work"
        />
        <Projects
            projects={sideProjects ?? []}
            title={t('Side Projects')}
            text={t('Side Projects text')}
            type="private"
        />
    </>
}

export default WorkPage

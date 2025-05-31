import { Skills } from '@/components/skills/Skills'
import { getClient } from '@/gql/urql'
import { QSkillsDocument, TQSkills } from '~/schema'

const SkillsPage = async () => {
    const { data } = await getClient().query<TQSkills>(QSkillsDocument, {})

    return <Skills categories={data?.technology_category} />
}

export default SkillsPage

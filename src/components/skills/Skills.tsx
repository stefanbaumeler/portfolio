import { TQSkills } from '~/schema'
import { SkillCategory } from '@/components/skills/SkillCategory'
import { TopNav } from '@/components/global/nav/TopNav'

type Props = {
    categories?: TQSkills['technology_category']
}

export const Skills = ({ categories = [] }: Props) => {
    return <div className="skills">
        <div className="skills__header">
            <h1 className="skills__title">
                Skills
            </h1>
            <TopNav />
        </div>
        <div className="skills__categories">
            {categories.map((category, k) => <SkillCategory
                key={k}
                category={category}
            />)}
        </div>
    </div>
}

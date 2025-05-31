import { TQSkills } from '~/schema'
import { dt } from '@/helpers/translate'
import { getLocale } from 'next-intl/server'
import { Skill } from '@/components/skills/Skill'

type Prop = {
	category: TQSkills['technology_category'][number]
}

export const SkillCategory = async ({ category }: Prop) => {
    const locale = await getLocale()
    const allChildIds = category.technologies.flatMap((technology) => technology.children.map((child) => child.id))

    return <div className="skills__skill">
        <>
            <h3 className="skills__label-container">
                <span className="skills__label">
                    {dt(category, 'title', locale)}
                </span>
            </h3>
            <ul className="skills__children">
                {category.technologies.filter((technology) => !allChildIds.includes(technology.id) && technology.list).map((technology, key) => {
                    return <Skill
                        key={key}
                        skill={technology}
                        subskills={technology.children}
                    />
                })}
            </ul>
        </>
    </div>
}

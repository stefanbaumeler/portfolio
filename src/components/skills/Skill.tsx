import { TQSkills } from '~/schema'
import { dt } from '@/helpers/translate'
import { getLocale } from 'next-intl/server'

type Props = {
    skill?: TQSkills['technology_category'][number]['technologies'][number] | TQSkills['technology_category'][number]['technologies'][number]['children'][number]
    subskills?: TQSkills['technology_category'][number]['technologies'][number]['children']
}

export const Skill = async ({
    skill, subskills = []
}: Props) => {
    const locale = await getLocale()

    return <li className="skills__skill">
        <h4 className="skills__label-container">
            <span className="skills__label">
                {skill?.label}
            </span>
        </h4>
        <span className="skills__hint">
            {dt(skill, 'description', locale)}
        </span>
        {subskills.length ? <ul className="skills__children">
            {subskills.map((skill, k) => {
                return <Skill
                    skill={skill}
                    key={k}
                />
            })}
        </ul> : null}
    </li>
}

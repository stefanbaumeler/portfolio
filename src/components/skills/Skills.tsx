import { Masonry } from '../global/Masonry'
import { TQSkills } from '~/schema'
import { SkillCategory } from '@/components/skills/SkillCategory'

type Props = {
	categories?: TQSkills['technology_category']
}

export const Skills = ({ categories = [] }: Props) => {
    return <div className="skills">
        <div className="skills__deco-lines">
            <div className="skills__deco-line"></div>
            <div className="skills__deco-line"></div>
            <div className="skills__deco-line"></div>
            <div className="skills__deco-line"></div>
            <div className="skills__deco-line"></div>
        </div>
        <div className="skills__content">
            <h2 className="skills__title">
				Skills
            </h2>
            <Masonry
                breakpointCols={{
                    default: 3,
                    1023: 2,
                    767: 1
                }}
                className="skills__skills"
                columnClassName="skills__column"
            >
                {categories.map((category, k) => <SkillCategory
                    key={k}
                    category={category}
                />)}
            </Masonry>
        </div>
    </div>
}

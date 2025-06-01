import { CSSProperties, ReactNode } from 'react'
import { TFProject } from '~/schema'
import { Slider } from '@/components/projects/Slider'
import { hexToHSL } from '@/helpers/hsl'
import Markdown from 'marked-react'
import { dt } from '@/helpers/translate'
import { Technology } from '@/components/projects/Technology'
import Icon from '@mdi/react'
import * as Icons from '@mdi/js'
import { getLocale, getTranslations } from 'next-intl/server'

type Props = {
	project: TFProject
}

export const Project = async ({ project }: Props) => {
    const projectHSL = hexToHSL(project.color)
    const locale = await getLocale()
    const t = await getTranslations()

    return <li
        className="project"
        style={{
            '--c-project': project.color,
            '--c-project-light': `hsl(${projectHSL.h}deg, ${projectHSL.s}%, ${projectHSL.l + (100 - projectHSL.l) / 3}%)`,
            '--c-project-lighter': `hsl(${projectHSL.h}deg, ${projectHSL.s}%, ${projectHSL.l === 0 ? 100 : projectHSL.l + (100 - projectHSL.l) / 5}%)`
        } as CSSProperties}
    >
        <Slider
            gallery={project.gallery}
        />
        <div className="project__content">
            <h2 className="project__title">
                <Markdown value={project.title.split('/').join('/\n\n')} />
            </h2>
            <div className="project__description">
                <Markdown
                    value={dt(project, 'description', locale)}
                />
            </div>
            <ul className="project__technologies">
                {project.technologies?.map((technology, key) => <Technology
                    technology={technology.technology_id}
                    secondary={technology.secondary}
                    color={project.color}
                    key={key}
                />)}
            </ul>
            <div className="project__button-container">
                <a
                    target="_blank"
                    href={project.url ?? 'mailto:stefan.baumeler@hotmail.com'}
                    className="project__button"
                    rel="noreferrer"
                >
                    {project.url ? <>
                        <Icon path={Icons.mdiOpenInNew} />
                        {t('View Project')}
                    </> : <>
                        <Icon path={Icons.mdiInformationOutline} />
                        {t('Contact me for more infos')}
                    </>}
                </a>
            </div>
        </div>
    </li>
}

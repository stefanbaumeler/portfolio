import { CSSProperties } from 'react'
import { TFProject } from '~/schema'
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
        <div className="project__header">
            <h2 className="project__title">
                <Markdown value={project.title} />
            </h2>
            <div className="project__description">
                <Markdown
                    value={dt(project, 'description', locale)}
                />
            </div>
            <h3 className="project__subtitle">
                {`${t('My contribution')}:`}
            </h3>
            <div className="project__contributions">
                <Markdown
                    value={dt(project, 'contributions', locale)}
                />
            </div>
        </div>
        <div className="project__content">
            <ul className="project__technologies">
                {project.technologies?.map((technology, key) => <Technology
                    technology={technology.technology_id}
                    secondary={technology.secondary}
                    color={project.color}
                    key={key}
                />)}
            </ul>
            {project.url ? <a
                target="_blank"
                href={project.url ?? 'mailto:stefan.baumeler@hotmail.com'}
                className="view-button"
                rel="noreferrer"
            >
                <span className="view-button__plus" />
                <span className="view-button__text">
                    {t('View Project')}
                </span>
            </a> : <a
                className="contact-button"
                href="mailto:stefan.baumeler@hotmail.com"
            >
                <Icon
                    className="contact-button__icon"
                    path={Icons.mdiInformationOutline}
                />
                <span className="contact-button__link">
                    {t('Contact me')}
                </span>
                <span className="contact-button__text">
                    &nbsp;
                    {t('for more infos')}
                </span>
            </a>}
        </div>
    </li>
}

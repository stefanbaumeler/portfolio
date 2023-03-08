import Icon from '@mdi/react'
import * as Icons from '@mdi/js'

export const Contact = () => {
    return <div className="contact">
        <h2 className="contact__title">
            Work with me
        </h2>
        <ul className="contact__list">
            <li className="contact__item">
                <a
                    href="https://github.com/stefanbaumeler"
                    className="contact__link"
                    aria-label="Stefan Baumeler on GitHub"
                >
                    <Icon path={Icons.mdiGithub} />
                </a>
            </li>
            <li className="contact__item">
                <a
                    href="mailto:stefan.baumeler@hotmail.com"
                    className="contact__link"
                    aria-label="Send me a message"
                >
                    <Icon path={Icons.mdiAt} />
                </a>
            </li>
        </ul>
    </div>
}

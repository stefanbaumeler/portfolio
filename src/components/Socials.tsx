import data from '../data'

export const Socials = () => {
    const socials = data.socials as {
        [index: string]: string
    }
    return <div className="socials">
        <ul className="socials__list">
            {Object.keys(socials).map((social, k) => <li
                className="socials__item"
                key={k}
            >
                <a
                    href={socials[social]}
                    className={`socials__link socials__link--${social}`}
                ></a>
            </li>)}
        </ul>
    </div>
}

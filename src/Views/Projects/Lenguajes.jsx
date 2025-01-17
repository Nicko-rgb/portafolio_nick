import React from 'react'
import { IoLogoJavascript, IoLogoCss3, IoLogoHtml5, IoLogoPython } from "react-icons/io5";
import icoPython from '../../assets/ico-python.png'

const Lenguajes = ({ repo, languages }) => {
    return (
        <div className="project-languages" title='Lenguajes'>
            {languages[repo.id] ? (
                languages[repo.id].map((lang) => (
                    <p key={lang} className="language-tag">
                        {lang === "JavaScript" ? <IoLogoJavascript className='js' /> : lang === "CSS" ?
                        <IoLogoCss3 className='css' /> : lang === "HTML" ? <IoLogoHtml5 className='html' />
                        : lang === "Python" ? <img src={icoPython} /> : null}
                        {lang}
                    </p>
                ))
            ) : (
                <span className="language-tag">Unknown</span>
            )}
        </div>
    )
}

export default Lenguajes
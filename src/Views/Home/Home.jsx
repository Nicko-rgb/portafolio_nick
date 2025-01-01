import React from 'react'
import './home.css'
import Particle from '../../Components/Anim/Particle'
import yo from '../../assets/yo.jpg'
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";

const Home = () => {

    return (
        <>
            <Particle />
            <main>
                <div className="title">
                    <h3 className='name'>Hi, I am Nixon</h3>
                    <h3 className="name1">Developer Web Full Stack</h3>
                </div>                <div className="foto">
                    <img src={yo} alt="yo" />
                </div>
                <div className="icons">
                    <a className='ico-in'>
                        <FaLinkedinIn className='ico-in' />
                        <p className='etiqueta'>LinkedIn</p>
                    </a>
                    <a className='ico-wsp'>
                        <IoLogoWhatsapp className='ico-wsp' />
                        <p className='etiqueta'>WhatsApp</p>
                    </a>
                    <a className='ico-fb'>
                        <FaFacebookF className='ico-fb' />
                        <p className='etiqueta'>Facebook</p>
                    </a>
                    <a className='ico-gh' href='https://github.com/Nicko-rgb' target="_blank" rel="noopener noreferrer">
                        <IoLogoGithub className='ico-gh' />
                        <p className='etiqueta'>GitHub</p>
                    </a>
                </div>
                <div className="dess">
                    <p className="descripcion">
                        I'm a passionate developer with a strong interest in creating innovativ
                        solutions. I'm a quick learner, and I'm always looking for new challenges and opportunities to
                        grow as a developer. Soy desarrollor web Full Stack entranado para la construccion de aplicaciones web
                        tanto por el BackEnd y FrontEnd intengrando la seguridad.
                    </p>
                </div>
            </main>
            <div className="line"></div>
        </>
    )
}

export default Home
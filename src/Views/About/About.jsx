import React, { useEffect } from 'react';
import AOS from 'aos';
import './about.css';
import imgAbout from '../../assets/aboutme.png';

const About = () => {
    
    useEffect(() => {
        AOS.init({ 
            duration: 1000, // Duración de la animación
            once: true, // Ejecutar una sola vez
            offset: 200, // Espacio desde el viewport para activar animación
        });
    }, []);

    return (
        <section className="about-me">
            <h2 data-aos="fade-down">Acerca de mí</h2>
            <div className="about-me-content">
                <div className="about-me-image" data-aos="fade-right">
                    <img src={imgAbout} alt="Nixon Mancilla" />
                </div>
                <div className="about-me-text" data-aos="fade-left">
                    <p>¡Hola! Soy <strong>Nixon Mancilla Leon</strong>, un desarrollador de software apasionado por crear soluciones tecnológicas. Tengo experiencia trabajando con tecnologías como React, Node.js, y Flutter, y me encanta enfrentar desafíos técnicos que mejoren la experiencia del usuario.</p>
                    <p>Mi enfoque está en el desarrollo de aplicaciones web y móviles, asegurando que sean eficientes, escalables y fáciles de usar. Estoy siempre aprendiendo nuevas tecnologías y buscando maneras de mejorar mis habilidades.</p>
                    <h3 data-aos="fade-up">Habilidades</h3>
                    <ul>
                        <li data-aos='fade-left'><strong>Desarrollo Frontend:</strong> React, JavaScript, HTML, CSS</li>
                        <li data-aos='fade-left'><strong>Desarrollo Backend:</strong> Node.js, Express, PHP</li>
                        <li data-aos='fade-left'><strong>Lenguajes de Programación:</strong> Python, Java, Kotlin</li>
                        <li data-aos='fade-left'><strong>Bases de Datos:</strong> MySQL, PostgreSQL, MongoDB</li>
                        <li data-aos='fade-left'><strong>Control de Versiones:</strong> Git, GitHub</li>
                    </ul>

                    <h3 data-aos="fade-up">Formación</h3>
                    <aside>
                        <h4 data-aos="fade-up">Instituto de Educación Superior Tecnológico Público Suiza - Pucallpa, Perú</h4>
                        <p data-aos="fade-up">Graduado en la carrera técnica de Desarrollo de Software, donde adquirí una sólida base en programación, desarrollo de aplicaciones y gestión de proyectos tecnológicos.</p>

                        <h4 data-aos="fade-up">Autodidacta</h4>
                        <p data-aos="fade-up">Como programador autodidacta, he complementado mi formación técnica explorando de manera independiente tecnologías emergentes, frameworks modernos, y tendencias en desarrollo de software, lo que me permite adaptarme rápidamente a nuevos desafíos.</p>

                        <h4 data-aos="fade-up">Certificaciones</h4>
                        <ul>
                            <li data-aos='fade-left'>Certificado en Desarrollo Web Full Stack.</li>
                            <li data-aos='fade-left'>Certificación en Herrameintas de Google</li>
                            <li data-aos='fade-left'>Certificado en Seguridad y Desarrollo de Software Seguro.</li>
                            <li data-aos='fade-left'>Certificado Ingles Nivel Básico</li>
                        </ul>
                    </aside>

                </div>
            </div>
        </section>
    )
}

export default About


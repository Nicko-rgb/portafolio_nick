import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './about.css';
import imgAbout from '../../assets/aboutme.png';

const About = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Duración de la animación
            once: false, // Ejecutar una sola vez
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
                    <p>¡Hola! Soy <strong>Nixon Mancilla Leon</strong>, un desarrollador de software apasionado por diseñar y construir soluciones tecnológicas innovadoras. Con experiencia en tecnologías modernas como React, Node.js y Python, disfruto enfrentar desafíos técnicos para crear productos que destaquen por su eficiencia, escalabilidad y excelente experiencia de usuario.</p>
                    <br />
                    <p>Mi especialidad es el desarrollo de sistemas y aplicaciones web, donde combino un enfoque full stack con habilidades en frontend y backend para entregar proyectos completos y funcionales. Estoy comprometido con el aprendizaje continuo, lo que me permite mantenerme al día con las últimas tendencias tecnológicas y mejorar constantemente mis capacidades.</p>

                    <h3 data-aos="fade-up">Habilidades</h3>
                    <ul>
                        <li data-aos='fade-left'><strong>Desarrollo Frontend:</strong> React, JavaScript, HTML, CSS</li>
                        <li data-aos='fade-left'><strong>Desarrollo Backend:</strong> Node.js, Express, PHP</li>
                        <li data-aos='fade-left'><strong>Lenguajes de Programación:</strong> Python, Java, Kotlin</li>
                        <li data-aos='fade-left'><strong>Bases de Datos:</strong> MySQL, PostgreSQL, MongoDB</li>
                        <li data-aos='fade-left'><strong>Control de Versiones:</strong> Git, GitHub</li>
                        <li data-aos='fade-left'><strong>Sistemas Operativos:</strong> Windows, Linux (Ubuntu, Kali Linux)</li>
                    </ul>

                    <h3 data-aos="fade-up">Formación</h3>
                    <aside>
                        <h4 data-aos="fade-up">Instituto de Educación Superior Tecnológico Público Suiza - Pucallpa, Perú</h4>
                        <p data-aos="fade-up">Graduado en la carrera técnica de Desarrollo de Software, donde adquirí una base sólida en programación, desarrollo de aplicaciones y gestión de proyectos tecnológicos.</p>

                        <h4 data-aos="fade-up">Autodidacta</h4>
                        <p data-aos="fade-up">Como programador autodidacta, complemento mi formación explorando de manera independiente tecnologías emergentes, frameworks modernos y tendencias en desarrollo de software, adaptándome rápidamente a los retos del sector.</p>

                        <h4 data-aos="fade-up">Certificaciones</h4>
                        <ul>
                            <li data-aos='fade-left'>Certificado en Desarrollo Web Full Stack</li>
                            <li data-aos='fade-left'>Certificación en Herramientas de Google</li>
                            <li data-aos='fade-left'>Certificado en Seguridad y Desarrollo de Software Seguro</li>
                            <li data-aos='fade-left'>Certificado en Inglés - Nivel Básico</li>
                        </ul>
                    </aside>
                </div>

            </div>
        </section>
    )
}

export default About


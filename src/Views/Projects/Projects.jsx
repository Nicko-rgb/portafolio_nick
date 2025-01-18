import React, { useEffect, useState } from 'react';
import './project.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lenguajes from './Lenguajes';
import { CiViewTimeline } from "react-icons/ci";
import { TiInfoLarge } from "react-icons/ti";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoJavascript, IoLogoCss3, IoLogoHtml5, IoLogoPython } from "react-icons/io5";
import icoPython from '../../assets/ico-python.png'


const Projects = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [languages, setLanguages] = useState({});

    // Función para mezclar el orden de los proyectos
    const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

    const token = import.meta.env.VITE_GITHUB_TOKEN;

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch('https://api.github.com/users/Nicko-rgb/repos', {
                    headers: token
                        ? {
                            Authorization: `Bearer ${token}`,
                            Accept: 'application/vnd.github.v3+json',
                        }
                        : {},
                });

                if (!response.ok) throw new Error('Error al obtener los repositorios');

                const data = await response.json();

                if (!Array.isArray(data)) {
                    throw new Error('La respuesta no es un array válido');
                }

                const shuffledRepos = shuffleArray(data);

                // Obtener lenguajes para cada repositorio
                const languagePromises = shuffledRepos.map(async (repo) => {
                    const res = await fetch(repo.languages_url);
                    if (!res.ok) return { [repo.id]: [] }; // Si falla, devolver vacío
                    const langs = await res.json();
                    return { [repo.id]: Object.keys(langs) };
                });

                const languageData = await Promise.all(languagePromises);
                const languageMap = languageData.reduce((acc, curr) => ({ ...acc, ...curr }), {});

                setRepos(shuffledRepos);
                setLanguages(languageMap);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching repositories:', error);
                setLoading(false);
            }
        };

        fetchRepos();
    }, [token]);

    const truncateDescription = (description, maxLength) => {
        if (!description) return 'No description available';
        return description.length > maxLength ? `${description.substring(0, maxLength)}...` : description;
    };

    useEffect(() => {
        AOS.init({
            duration: 1000, // Duración de la animación
            once: false, // Ejecutar una sola vez
            offset: 200, // Espacio desde el viewport para activar animación
        });
    }, []);

    return (
        <section className="projects-container">
            <h1 data-aos="fade-down" className="projects-title">My Projects</h1>

            <div className="projects-description">
                <p data-aos='fade-up'>
                    En esta sección presento algunos de los proyectos que he desarrollado, donde he aplicado mis habilidades en diseño y programación.
                    Estos incluyen la creación de minijuegos, sitios web completos y ejecutables en Python, cada uno diseñado con un enfoque en la funcionalidad, la eficiencia y la estética.
                    Cada proyecto refleja mi compromiso por ofrecer soluciones innovadoras que atienden necesidades específicas y proporcionan una experiencia de usuario optimizada.
                </p>

            </div>
            {loading ? (
                <p className="loading-text">Loading projects...</p>
            ) : (
                <div className="projects-grid">
                    <p className="info" data-aos="fade-right"><TiInfoLarge />Puede algunos datos no estén disponibles</p>
                    {repos.map((repo) => (
                        <div
                            className="project-card"
                            key={repo.id}
                            data-aos="zoom-in-up"
                        >
                            <CiViewTimeline className='note-ico' />
                            <IoLogoGithub className='github-ico' />
                            <h2 className="project-name">{repo.name}</h2>
                            <p className="project-description">
                                {truncateDescription(repo.description, 100)}
                            </p>
                            <Lenguajes repo={repo} languages={languages} />
                            <a
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                View on GitHub
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Projects;

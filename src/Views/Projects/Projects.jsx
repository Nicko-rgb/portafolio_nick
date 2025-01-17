import React, { useEffect, useState, useRef } from 'react';
import './project.css';
import AOS from 'aos';
import Lenguajes from './Lenguajes';
import { CiViewTimeline } from "react-icons/ci";
import { TiInfoLarge } from "react-icons/ti";
import { IoLogoGithub } from "react-icons/io";

const Projects = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [languages, setLanguages] = useState({});
    const projectRefs = useRef(new Map());

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

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.5 }
        );

        projectRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            projectRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, [repos]);

    const truncateDescription = (description, maxLength) => {
        if (!description) return 'No description available';
        return description.length > maxLength ? `${description.substring(0, maxLength)}...` : description;
    };

    useEffect(() => {
        AOS.init({ 
            duration: 1000, // Duración de la animación
            once: true, // Ejecutar una sola vez
            offset: 100, // Espacio desde el viewport para activar animación
        });
    }, []);

    return (
        <section className="projects-container">
            <h1 data-aos="fade-down" className="projects-title">My Projects</h1>
            {loading ? (
                <p className="loading-text">Loading projects...</p>
            ) : (
                <div className="projects-grid">
                    <p className="info"><TiInfoLarge />Puede algunos datos no estén disponibles</p>
                    {repos.map((repo, index) => (
                        <div
                            className={`project-card hidden animation-${index % 3}`}
                            key={repo.id}
                            ref={(el) => {
                                if (el) projectRefs.current.set(repo.id, el);
                            }}
                        >
                            <CiViewTimeline className='note-ico' />
                            <IoLogoGithub className='github-ico'/>
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

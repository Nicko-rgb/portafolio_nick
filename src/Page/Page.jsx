import React, { useRef, useEffect, useState } from 'react';
import './page.css';
import '../Components/Nav/nav.css'
import Home from '../Views/Home/Home';
import About from '../Views/About/About';
import Projects from '../Views/Projects/Projects';
import Contact from '../Views/Contact/Contact';
import Loading from '../Components/Anim/Loading';
import GitHub from '../Views/GitHub/GitHub';
import logo from '../assets/logo_page.png';
import { GoHome } from "react-icons/go";
import { GrInfo, GrGithub, GrAppsRounded, GrContactInfo } from "react-icons/gr";
import fond from '../assets/fondo3.jpg'

const Page = () => {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null)
    const [activeSection, setActiveSection] = useState('home');
    const [openGit, setOpenGit] = useState(false)

    const handleScroll = () => {
        const sections = [
            { id: 'home', ref: homeRef },
            { id: 'about', ref: aboutRef },
            { id: 'projects', ref: projectsRef },
            { id: 'contact', ref: contactRef },
        ];

        const scrollPosition = window.scrollY + window.innerHeight / 4;

        sections.forEach(({ id, ref }) => {
            if (ref.current) {
                const sectionTop = ref.current.offsetTop;
                const sectionHeight = ref.current.clientHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveSection(id);
                }
            }
        });
    };

    const handleScrollTo = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
        setOpenGit(false)
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Código para evaluar si la imagen de fondo cargó
    const [isLoading, setIsLoading] = useState(true);
    const backgroundImageUrl = 'https://images.pexels.com/photos/547125/pexels-photo-547125.jpeg'

    useEffect(() => {
        const img = new Image();
        img.src = backgroundImageUrl;

        img.onload = () => {
            setIsLoading(false);
        };

        img.onerror = () => {
            setIsLoading(true);
        };
    }, [backgroundImageUrl]);

    const handleReload = () => {
        window.location.reload()
    }

    const handleOpenGit = () => {
        setOpenGit(!openGit)
    }
    const handleCloseOpenGit = () => {
        setOpenGit(false)
    }

    return (
        <div className='page' onClick={handleCloseOpenGit}>
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    {/* <NavTop activeSection={activeSection} homeRef={homeRef} aboutRef={aboutRef} projectsRef={projectsRef} /> */}
                    <nav onClick={(e) => e.stopPropagation()} className={`nav-top ${activeSection !== 'home' ? 'nav-black' : ''}`} >
                        <div className="logo" onClick={handleReload}>
                            <img src={logo} alt="Logo" />
                            <p>N<span>ick</span></p>
                        </div>
                        <div className="right">
                            <span
                                className={activeSection === 'home' && !openGit ? 'active' : ''}
                                onClick={() => handleScrollTo(homeRef)}>
                                <GoHome className='ico' />Home
                            </span>
                            <span
                                className={activeSection === 'about' && !openGit ? 'active' : ''}
                                onClick={() => handleScrollTo(aboutRef)}>
                                <GrInfo className='ico' />About
                            </span>
                            <span
                                className={activeSection === 'projects' && !openGit ? 'active' : ''}
                                onClick={() => handleScrollTo(projectsRef)}>
                                <GrAppsRounded className='ico' />Projects
                            </span>
                            <span
                                className={activeSection === 'contact' && !openGit ? 'active' : ''}
                                onClick={() => handleScrollTo(contactRef)}
                            >
                                <GrContactInfo className='ico' />Contact
                            </span>
                            <span
                                className={openGit ? 'active' : ''}
                                onClick={() => handleOpenGit()}
                            >
                                <GrGithub className='ico' />GitHub
                            </span>
                        </div>
                    </nav>
                    <div
                        ref={homeRef}
                        id="home"
                        className='home'
                        // style={{ backgroundImage: `url(${backgroundImageUrl})` }}
                        style={{backgroundImage: `url(${fond})`}}
                    >
                        <Home openGit={openGit} handleOpenGit={handleOpenGit} />
                    </div>
                    <div
                        ref={aboutRef}
                        id="about"
                        className='about'
                    >
                        <About />
                    </div>
                    <div
                        ref={projectsRef}
                        id="projects"
                        className='project'
                    >
                        <Projects />
                    </div>
                    <div
                        ref={contactRef}
                        id="contact"
                        className='contact'
                    >
                        <Contact />
                    </div>
                    {openGit &&
                        <GitHub />
                    }
                </>
            )}
        </div>
    );
};

export default Page;

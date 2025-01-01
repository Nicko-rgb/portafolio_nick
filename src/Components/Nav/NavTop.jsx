import React from 'react';
import './nav.css';
import logo from '../../assets/logo_page.png';
import { GoHome } from "react-icons/go";
import { GrInfo, GrGithub, GrAppsRounded, GrContactInfo } from "react-icons/gr";


const NavTop = ({ activeSection, homeRef, aboutRef, projectsRef }) => {


    const handleScrollTo = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    const handleReload = () => {
        window.location.reload()
    }

    return (
        <div className={`nav-top ${activeSection !== 'home' ? 'nav-black' : ''}`} >
            <div className="logo" onClick={handleReload}>
                <img src={logo} alt="Logo" />
                <p>Nicko</p>
            </div>
            <div className="right">
                <span
                    className={activeSection === 'home' ? 'active' : ''}
                    onClick={() => handleScrollTo(homeRef)}>
                    <GoHome className='ico' />Home
                </span>
                <span
                    className={activeSection === 'about' ? 'active' : ''}
                    onClick={() => handleScrollTo(aboutRef)}>
                    <GrInfo className='ico' />About
                </span>
                <span
                    className={activeSection === 'projects' ? 'active' : ''}
                    onClick={() => handleScrollTo(projectsRef)}>
                    <GrAppsRounded className='ico' />Projects
                </span>
                <span>
                    <GrContactInfo className='ico' />Contact
                </span>
                <span
                    className={activeSection === 'github' ? 'active' : ''}
                >
                    <GrGithub className='ico' />GitHub
                </span>
            </div>
        </div>
    );
};

export default NavTop;

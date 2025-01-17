import React, { useState, useEffect } from "react";
import "./home.css";
import Particle from "../../Components/Anim/Particle";
import Avatar from "../../Components/Anim/Avatar";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { HiOutlineCode } from "react-icons/hi";
import { MiniCubo } from "../../Components/Anim/Animation";

const Home = () => {
    // Código para cambio de texto
    const words = ["Student", "Developer", "Programmer"];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [exiting, setExiting] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setExiting(true); // Marca el texto actual como saliendo
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
                setExiting(false); // Restablece el estado después de la salida
            }, 500); // Tiempo de la animación de salida
        }, 2000); // Tiempo total entre cambios

        return () => clearInterval(interval); // Limpia el intervalo al desmontar
    }, [words.length]);

    return (
        <>
            <Particle />
            <main>
                <section>
                    <div className="title-box">
                        <h3 className="name">
                            Hi, my name is <span className="animated-border-text">Nixon</span>.
                        </h3>
                        <h3 className="name1">
                            <MiniCubo /> Developer Full Stack <HiOutlineCode />
                        </h3>
                        <p className="des">
                            I am{" "}
                            <span
                                key={currentIndex}
                                className={`animated-text ${exiting ? "exit" : "enter"}`}
                            >
                                {words[currentIndex]}
                            </span>{" "}
                            with a passion for crafting innovative and efficient web solutions through creativity and dedication.
                        </p>

                    </div>
                    <div className="avatar">
                        <Avatar />
                    </div>
                </section>
                <div className="icons">
                    <a className="ico-in" href="#" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn />
                        <p className="etiqueta">LinkedIn</p>
                    </a>
                    <a className="ico-wsp" href="https://walink.co/7c3eb6" target="_blank" rel="noopener noreferrer">
                        <IoLogoWhatsapp />
                        <p className="etiqueta">WhatsApp</p>
                    </a>
                    <a
                        className="ico-fb"
                        href="https://web.facebook.com/nick.mancillaleon"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFacebookF />
                        <p className="etiqueta">Facebook</p>
                    </a>
                    <a
                        className="ico-gh"
                        href="https://github.com/Nicko-rgb"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <IoLogoGithub />
                        <p className="etiqueta" style={{ color: "white" }}>
                            GitHub
                        </p>
                    </a>
                </div>
            </main>
        </>
    );
};

export default Home;

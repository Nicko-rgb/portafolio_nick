import React, { useState,useEffect } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { LuSend } from "react-icons/lu";

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true); // Activar el estado de carga

        emailjs
            .send(
                'service_hb2l29j', // Reemplaza con tu Service ID
                'template_qa8obon', // Reemplaza con tu Template ID
                formData, // Los datos del formulario
                'k40G650_wVxY7EwOT' // Reemplaza con tu User ID
            )
            .then(
                () => {
                    setStatus('Mensaje enviado con éxito.');
                    setFormData({ name: '', email: '', message: '' }); // Limpiar formulario
                    setLoading(false); // Desactivar el estado de carga
                },
                (error) => {
                    console.error('Error al enviar el mensaje:', error);
                    setStatus('Error al enviar el mensaje. Inténtalo de nuevo.');
                    setLoading(false); // Desactivar el estado de carga
                }
            );
    };

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 200,
        });
    }, []);

    return (
        <section className="contact-me">
            <div data-aos="fade-up" className="contact-container">
                <h3>Contáctame</h3>
                <p>¿Tienes alguna pregunta o quieres trabajar conmigo? ¡Envíame un mensaje!</p>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Tu nombre"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu correo electrónico"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Mensaje</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            placeholder="Escribe tu mensaje aquí..."
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="contact-btn" disabled={loading}>
                        {loading ? 'Enviando datos...' : 'Enviar Mensaje'} <LuSend className={`${loading ? 'volvar-ico' : ''}`} />
                    </button>
                </form>
                {status && <p className="status-message">{status}</p>}
            </div>
        </section>
    );
};

export default Contact;

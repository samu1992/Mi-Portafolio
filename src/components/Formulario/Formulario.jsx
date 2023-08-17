import React, { useRef } from 'react';
import emailjs from 'emailjs-com'

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_mlw425o', 'template_47kf2d5', form.current, 'dhJLQsjmGETr6WiNn')
            .then((result) => {
                console.log(result.text);
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form className='container-form' ref={form} onSubmit={sendEmail}>
            <label>Nombre</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Mensaje</label>
            <textarea name="message" />
            <button type="submit" value="Send">Enviar</button>
        </form>
    );
};
import fondo from './../../assets/imgs/fondo.jpg';
import './home.css';
import 'animate.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useEffect, useState } from 'react';
const Home = () => {
    useEffect(() => {
        document.title = 'Clinica Yumbay | Inicio';
    },[])
    return (
    <>
    <Header></Header>
        <div className='fondo-parrafo p-2'>
            <img src={fondo} alt="doctores" style={{ width: '65%' }} />
            <article className='__parrafo'>
                <h2 className='text-center p-2 text-primary'>
                    Bienvenido!
                </h2>
            <p style={{ width: '100%' }}>
            ¡Bienvenido a nuestra página web de agendamiento de citas médicas! 
            Nos complace que haya encontrado nuestro sitio y esperamos poder ayudarlo a 
            programar una cita médica de manera fácil y rápida. Nuestro objetivo es proporcionarle 
            una experiencia de agendamiento sin complicaciones y asegurarnos de que reciba la atención 
            médica que necesita en el momento que lo necesite. Si tiene alguna pregunta o necesita 
            ayuda durante el proceso de agendamiento, no dude en comunicarse con nuestro equipo 
            de soporte al cliente. ¡Gracias por confiar en nosotros para sus necesidades de atención médica!
            </p>
            </article>
            
        </div>
        <div>
            <h2 className='text-primary fw-900 text-center'>FUNDACIÓN ARTURO YUMBAY </h2>

            <p className='p-4 ppp'>Fundación Arturo Yumbay es una organización no 
                gubernamental y multidisciplinaria que, con transparencia y compromiso, 
                orienta sus esfuerzos hacia el empoderamiento y buen vivir de las comunidades y 
                sociedad bolivarense.</p>
        </div>
        <Footer className='mt-5' />
    </>
    );
}




export default Home;
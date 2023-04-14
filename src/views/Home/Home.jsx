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
        <div>
            <img src={fondo} alt="doctores" className='fondo position-relative' />
        </div>
        <div>
            <h2 className='text-primary fw-900 text-center'> Algo Mas </h2>
            <p>texto informativo</p>
        </div>
        <Footer className='mt-5' />
    </>
    );
}




export default Home;
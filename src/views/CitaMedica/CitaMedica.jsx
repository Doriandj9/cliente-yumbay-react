import Footer from "../../components/Footer";
import Header from "../../components/Header";
import './index.css';
import { useEffect, useState } from 'react';
const CitaMedica = () => {

    useEffect(() => {
        document.title = 'Clinica Yumbay | Cita Medica';
    },[])


    return (
        <>
        <div className="container__min">
            <Header></Header>
            <div className="flex-grow-1">
            <h1>Datos</h1>
            </div>
            <Footer></Footer>
        </div>
        </>
    );
}

export default CitaMedica;
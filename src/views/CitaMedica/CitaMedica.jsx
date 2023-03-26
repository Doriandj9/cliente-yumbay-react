import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useSelector } from 'react-redux';
import './index.css';
import { useEffect } from 'react';

const CitaMedica = () => {

    useEffect(() => {
        document.title = 'Clinica Yumbay | Cita Medica';
    },[])

    const user = useSelector((state) => state.user);
    return (
        <>
        <div className="container__min">
            <Header></Header>
            <div className="flex-grow-1">
            <h1>Datos</h1>
            <ul>
                <li>{user.name ?? 'No hay Usuario'}</li>
                <li>{user.username}</li>
                <li>{user.email}</li>

            </ul>
            </div>
            <Footer></Footer>
        </div>
        </>
    );
}

export default CitaMedica;
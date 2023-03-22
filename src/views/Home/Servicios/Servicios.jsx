import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { useEffect } from 'react';

const Servicios = () => {

    useEffect(() => {
        document.title = 'Clinica Yumbay | Servicios';
    },[])

    return (
        <>
        <Header></Header>
            <div className="border border-1 w-100 mt-4"></div>
            <div className="mt-2">
                    <h2 className="text-white text-center bg-secondary p-2" >Servicios clinicos.</h2>
            </div>

            <div className="d-flex justify-content-center mb-4">
                <div id='' className="card" style={{width:'75%'}}>
                    <div className="card-body">
                        <h5 className="card-title text-center">Listado de servicios</h5>
                        <div className="border border-1 w-100"></div>
                            <ul>
                                <li>Medicina general</li>
                                <li>Atención pediátrica</li>
                                <li>Odontología</li>
                                <li>Ginecología</li>
                                <li>Fisioterapia</li>
                                <li>Otorrinolaringología</li>
                                <li>Audiología</li>
                            </ul>
                    </div>
                </div>
            </div>
        <Footer></Footer>
        </>
    );
}

export default Servicios;
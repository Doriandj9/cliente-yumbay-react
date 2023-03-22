import {FaClinicMedical} from 'react-icons/fa';
import {BsTelephoneFill} from 'react-icons/bs';
import {MdEmail} from 'react-icons/md';
import {HiLocationMarker} from 'react-icons/hi';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { useEffect } from 'react';

const Contacto = () => {
    useEffect(() => {
        document.title = 'Clinica Yumbay | Contactenos';
    },[])
    return (
        <>
            <Header />
             <div className="border border-1 w-100 mt-4"></div>
            <div className="mt-2">
                    <h2 className="text-white text-center bg-secondary p-2">Contactenos</h2>
            </div>
            <div className="d-flex justify-content-center mb-4">
                <div id='' className="card" style={{width:'50%'}}>
                    <div className="card-body">
                        <h5 className="card-title text-center">INFORMACIÓN</h5>
                        <div className="border border-1 w-100"></div>
                        <ul className='list-group'>
                            <li className='d-flex list-group-item align-items-center gap-2'>
                                <div className='contact-icon'>
                                <FaClinicMedical className='font-1 text-white'></FaClinicMedical>
                                </div>
                                Clinica Yumbay
                            </li>
                            <li className='d-flex list-group-item align-items-center gap-2'>
                                <div className='contact-icon'>
                                <BsTelephoneFill className='font-1 text-white'></BsTelephoneFill>
                                </div>
                                09899604712
                            </li>
                            <li className='d-flex list-group-item align-items-center gap-2'>
                                <div className='contact-icon'>
                                <MdEmail className='font-1 text-white'></MdEmail>
                                </div>
                                clinica-yumbay@gmail.com
                            </li>
                            <li className='d-flex list-group-item align-items-center gap-2'>
                                <div className='contact-icon'>
                                <HiLocationMarker className='font-1 text-white'></HiLocationMarker>
                                </div>
                                15 de Mayo y Selva Alegre
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Contacto;
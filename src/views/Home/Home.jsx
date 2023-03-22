import fondo from './../../assets/imgs/fondo.jpg';
import medicinaGeneral from './../../assets/imgs/undraw_medicine_b-1-ol.svg';
import pediatria from './../../assets/imgs/undraw_true_friends_c-94-g.svg';
import odontologia from './../../assets/imgs/cuidado-dental.png';
import ginecología from './../../assets/imgs/examen-pelvico.png';
import fisioterapia from './../../assets/imgs/terapia-fisica.png';
import otorrinolaringologia from './../../assets/imgs/otoscopio.png';
import {FaHandHoldingMedical} from 'react-icons/fa';
import audiologia from './../../assets/imgs/oido.png';
import { Link, useLoaderData } from 'react-router-dom';
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
            <div className='content-description'>
                        <h5 className='text-center text-black fw-bold'>Clinica de atención medica Yumbay</h5>
                        <p className='text-black '>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere voluptatem odio placeat esse est ad distinctio ipsa tempora error, illum earum, voluptatum, quidem ducimus fugit?
                        </p>
                        <div className='w-100'>
                        
                            <Link to='cita-medica' className='btn btn-primary m-auto d-block w-75 text-white
                            justify-content-center align-items-center d-flex flex-column'>
                            <FaHandHoldingMedical className='display-5' />
                                <span>
                                Agendar Cita
                                </span>
                                
                            </Link>
                        </div>
                 </div>
        </div>
        <div>
        <div className='containers__cards p-3 d-flex gap-2 justify-content-around flex-wrap'>
            <div className="card" style={{width:'22rem'}}>
                <img src={medicinaGeneral} alt="" />
                <div className="card-body">
                    <h5 className="card-title">Medicna general</h5>
                    <p className="card-text">Constituye el primer nivel de atención médica y es imprescindible para la prevención, detección, tratamiento y seguimiento de las enfermedades crónicas
                     estabilizadas, responsabilizándose del paciente en su conjunto.</p>
                    <Link to='' className="btn btn-primary text-white d-flex align-items-center gap-2 w-50 justify-content-center">
                       <FaHandHoldingMedical className='fonty-2' /> <span>Agendar Cita</span>
                    </Link>
                </div>
            </div>
            <div className="card" style={{width:'22rem'}}>
                 <img src={pediatria} alt="" />
                 
                <div className="card-body">
                    <h5 className="card-title">Atención pediátrica</h5>
                    <p className="card-text">Se ocupa del estudio del crecimiento y el desarrollo de los niños hasta la adolescencia, así como del tratamiento de sus enfermedades.</p>
                    <a href="#" className="btn btn-primary text-white d-flex align-items-center gap-2 w-50 justify-content-center">
                       <FaHandHoldingMedical className='fonty-2' /> <span>Agendar Cita</span>
                    </a>
                </div>
            </div>
            <div className="card" style={{width:'22rem'}}>
                 <img src={odontologia} alt="" />
                <div className="card-body">
                    <h5 className="card-title">Odontología</h5>
                    <p className="card-text">Se dedica al estudio de los dientes y las encías y al tratamiento de sus dolencias.</p>
                    <a href="#" className="btn btn-primary text-white d-flex align-items-center gap-2 w-50 justify-content-center">
                       <FaHandHoldingMedical className='fonty-2' /> <span>Agendar Cita</span>
                    </a>
                </div>
            </div>
            <div className="card" style={{width:'22rem'}}>
                 <img src={ginecología} alt="" />
                <div className="card-body">
                    <h5 className="card-title">Ginecología</h5>
                    <p className="card-text">Estudia y trata todo lo relacionado con el aparato reproductorio, útero y ovarios de la mujer, tiene una especialidad que es la obstetricia que se encarga del embarazo, el parto y el puerperio (que es el periodo posterior al parto). </p>
                    <a href="#" className="btn btn-primary text-white d-flex align-items-center gap-2 w-50 justify-content-center">
                       <FaHandHoldingMedical className='fonty-2' /> <span>Agendar Cita</span>
                    </a>
                </div>
            </div>
            <div className="card" style={{width:'22rem'}}>
                 <img src={fisioterapia} alt="" />
                <div className="card-body">
                    <h5 className="card-title">Fisioterapia</h5>
                    <p className="card-text">Ofrece un tratamiento terapéutico y de rehabilitación no farmacológica para diagnosticar, prevenir y tratar síntomas de múltiples dolencias, tanto agudas como crónicas, por medio de agentes físicos como la electricidad, ultrasonido, láser, calor, frío, agua, técnicas manuales como estiramientos, tracciones, masajes.</p>
                    <a href="#" className="btn btn-primary text-white d-flex align-items-center gap-2 w-50 justify-content-center">
                       <FaHandHoldingMedical className='fonty-2' /> <span>Agendar Cita</span>
                    </a>
                </div>
            </div>
            <div className="card" style={{width:'22rem'}}>
                 <img src={otorrinolaringologia} alt="" />
                <div className="card-body">
                    <h5 className="card-title">Otorrinolaringología</h5>
                    <p className="card-text">Se ocupa de las funciones propias de estas áreas, como la respiración, la olfacción, la deglución, el habla y la voz y también de las estructuras faciales y cervicales que participan en ellas.</p>
                    <a href="#" className="btn btn-primary text-white d-flex align-items-center gap-2 w-50 justify-content-center">
                       <FaHandHoldingMedical className='fonty-2' /> <span>Agendar Cita</span>
                    </a>
                </div>
            </div>
            <div id='' className="card" style={{width:'22rem'}}>
                 <img src={audiologia} alt="" />
                <div className="card-body">
                    <h5 className="card-title">Audiología</h5>
                    <p className="card-text">Se encarga de estudiar y diagnosticar patologías de la audición y el oído; además también de la prevención, detección y tratamiento de sordera.</p>
                    <a href="#" className="btn btn-primary text-white d-flex align-items-center gap-2 w-50 justify-content-center">
                       <FaHandHoldingMedical className='fonty-2' /> <span>Agendar Cita</span>
                    </a>
                </div>
            </div>
        </div>
        </div>
        <Footer />
    </>
    );
}




export default Home;
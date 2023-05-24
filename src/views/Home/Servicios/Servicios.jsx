import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { useEffect } from 'react';
import medicinaGeneral from './../../../assets/imgs/undraw_medicine_b-1-ol.svg';
import pediatria from './../../../assets/imgs/undraw_true_friends_c-94-g.svg';
import odontologia from './../../../assets/imgs/cuidado-dental.png';
import ginecología from './../../../assets/imgs/examen-pelvico.png';
import fisioterapia from './../../../assets/imgs/terapia-fisica.png';
import otorrinolaringologia from './../../../assets/imgs/otoscopio.png';
import {FaHandHoldingMedical} from 'react-icons/fa';
import audiologia from './../../../assets/imgs/oido.png';
import { Link, useLoaderData } from 'react-router-dom';
import { useTitle } from "../../../utils/hooks/useTitle";

const Servicios = () => {
    useTitle('Servicios');
    return (
        <>
        <Header></Header>
            <div className="border border-1 w-100 mt-4"></div>
            <div className="mt-2">
                    <h2 className="text-white text-center bg-secondary p-2" >Servicios clinicos.</h2>
            </div>

            <div>
        <div className='containers__cards p-3 d-flex gap-1 justify-content-around flex-wrap'>
            <div className="card" style={{width:'12rem'}}>
                <img src={medicinaGeneral} alt="" />
                <div className="card-body">
                    <h5 className="card-title">Medicna general</h5>
                    <p className="card-text altura__1">Constituye el primer nivel de atención médica y es imprescindible para la prevención, detección, tratamiento y seguimiento de las enfermedades crónicas
                     estabilizadas, responsabilizándose del paciente en su conjunto.</p>
                </div>
            </div>
            <div className="card" style={{width:'12rem'}}>
                 <img src={pediatria} alt="" />
                 
                <div className="card-body">
                    <h5 className="card-title">Atención pediátrica</h5>
                    <p className="card-text altura__1">Se ocupa del estudio del crecimiento y el desarrollo de los niños hasta la adolescencia, así como del tratamiento de sus enfermedades.</p>
                    
                </div>
            </div>
            <div className="card" style={{width:'12rem'}}>
                 <img src={odontologia} alt="" />
                <div className="card-body">
                    <h5 className="card-title">Odontología</h5>
                    <p className="card-text altura__1">Se dedica al estudio de los dientes y las encías y al tratamiento de sus dolencias.</p>
                </div>
            </div>
            <div className="card" style={{width:'12rem'}}>
                 <img src={ginecología} alt="" />
                <div className="card-body">
                    <h5 className="card-title">Ginecología</h5>
                    <p className="card-text altura__1">Estudia y trata todo lo relacionado con el aparato reproductorio, útero y ovarios de la mujer, tiene una especialidad que es la obstetricia que se encarga del embarazo, el parto y el puerperio (que es el periodo posterior al parto). </p>
                </div>
            </div>
            <div className="card" style={{width:'12rem'}}>
                 <img src={fisioterapia} alt="" />
                <div className="card-body">
                    <h5 className="card-title">Fisioterapia</h5>
                    <p className="card-text altura__1">Ofrece un tratamiento terapéutico y de rehabilitación no farmacológica para diagnosticar, prevenir y tratar síntomas de múltiples dolencias, tanto agudas como crónicas, por medio de agentes físicos como la electricidad, ultrasonido, láser, calor, frío, agua, técnicas manuales como estiramientos, tracciones, masajes.</p>
                </div>
            </div>
            <div className="card" style={{width:'12rem'}}>
                 <img src={otorrinolaringologia} alt="" />
                <div className="card-body">
                    <h5 className="card-title">Otorrinolaringología</h5>
                    <p className="card-text altura__1">Se ocupa de las funciones propias de estas áreas, como la respiración, la olfacción, la deglución, el habla y la voz y también de las estructuras faciales y cervicales que participan en ellas.</p>
                </div>
            </div>
            <div id='' className="card" style={{width:'12rem'}}>
                 <img src={audiologia} alt="" />
                <div className="card-body">
                    <h5 className="card-title">Audiología</h5>
                    <p className="card-text altura__1">Se encarga de estudiar y diagnosticar patologías de la audición y el oído; además también de la prevención, detección y tratamiento de sordera.</p>
                </div>
            </div>
        </div>
        </div>
        <Footer></Footer>
        </>
    );
}

export default Servicios;
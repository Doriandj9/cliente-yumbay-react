import { Link, NavLink } from 'react-router-dom';
import logo from './../assets/imgs/logo-largo.png'
import {AiFillHome,AiOutlineHeart } from 'react-icons/ai';
import {HiUserGroup} from 'react-icons/hi';
import {MdMedicalServices,MdContactMail} from 'react-icons/md';
import {FaHandHoldingMedical} from 'react-icons/fa';
import {FiLogIn} from 'react-icons/fi';
import 'animate.css';

const Header = () => {

    return (
        <>
            <nav className="navbar bg-white navbar-expand-lg bg-light p-0 m-0 responsive__nav">
                
            <div className="container-fluid p-0 m-0">
                <div className='d-flex justify-content-between align-items-center w-100'>
                    <div className=''>
                        <img  className='img-thumbnail'
                        style={{
                            width: 300,
                            height: 80,
                            marginRight: '1rem'
                        }}
                        src={logo} alt="logo" />
                    </div>

                    <div className='me-5'>
                        <ul className='navbar-nav'>
                        <li className="nav-item item-custom">
                            <NavLink 
                            className={({isActive}) => {
                                return isActive ? 
                                'nav-link text-primary d-flex align-items-center gap-1 item-activo':
                                'nav-link text-primary d-flex align-items-center gap-1';
                            }} 
                            aria-current="page" 
                            to='/' >
                                <AiFillHome className='font-1 pointer-none'></AiFillHome>
                                INICIO
                            </NavLink>
                        </li>
                        <li className="nav-item item-custom">
                            <NavLink
                            className={({isActive}) => {
                                return isActive ? 
                                'nav-link text-primary d-flex align-items-center gap-1 item-activo':
                                'nav-link text-primary d-flex align-items-center gap-1';
                            }} 
                             aria-current="page"
                             to="/nosotros">
                                <HiUserGroup className='font-1 pointer-none'></HiUserGroup> 
                                SOBRE NOSOTROS</NavLink>
                        </li>
                        <li className="nav-item item-custom">
                            <NavLink className={({isActive}) => {
                                return isActive ? 
                                'nav-link text-primary d-flex align-items-center gap-1 item-activo':
                                'nav-link text-primary d-flex align-items-center gap-1';
                            }}  
                            aria-current="page" 
                            to="/servicios">
                               <MdMedicalServices className='font-1 pointer-none'></MdMedicalServices>
                               SERVICIOS</NavLink>
                        </li>
                        <li className="nav-item item-custom">
                            <NavLink className={({isActive}) => {
                                return isActive ? 
                                'nav-link text-primary d-flex align-items-center gap-1 item-activo':
                                'nav-link text-primary d-flex align-items-center gap-1';
                            }} 
                            aria-current="page" 
                            to="/contacto">
                               <MdContactMail className='font-1 pointer-none'></MdContactMail>
                               CONTACTO</NavLink>
                        </li>
                        <li className="nav-item item-custom">
                            <NavLink className={({isActive}) => {
                                return isActive ? 
                                'nav-link text-primary d-flex align-items-center gap-1 item-activo':
                                'nav-link text-primary d-flex align-items-center gap-1';
                            }} 
                            aria-current="page" 
                            to="/cita-medica">
                               <FaHandHoldingMedical className='font-1 pointer-none'></FaHandHoldingMedical>
                               AGENDAR CITA MÉDICA</NavLink>
                        </li>
                        <li className="nav-item item-custom">
                            <NavLink className={({isActive}) => {
                                return isActive ? 
                                'nav-link text-primary d-flex align-items-center gap-1 item-activo':
                                'nav-link text-primary d-flex align-items-center gap-1';
                            }} 
                            aria-current="page" 
                            to="/login">
                               <FiLogIn className='font-1 pointer-none'></FiLogIn>
                               INICIAR SESIÓN</NavLink>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        </>
    );
}

export default Header;
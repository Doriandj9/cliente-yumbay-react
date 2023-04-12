import { Link as LinkMenu, NavLink } from 'react-router-dom';
import logo from './../assets/imgs/logo-largo.png'
import {AiFillHome,AiOutlineHeart } from 'react-icons/ai';
import {HiUserGroup} from 'react-icons/hi';
import {MdMedicalServices,MdContactMail} from 'react-icons/md';
import {FaHandHoldingMedical} from 'react-icons/fa';
import {FiLogIn} from 'react-icons/fi';
import 'animate.css';
import { useUserStore } from '../store/userStore';
import { useEffect } from 'react';
import { useState } from 'react';
import {MdSpaceDashboard} from 'react-icons/md';
import { pagesWeb } from '../utils/web/redirectPagesWeb';

const Header = () => {
    const user  = useUserStore((state) => state.user);
    const [menuApp,setMenuApp] = useState(null);
    useEffect(() => {
        setMenuApp(user)
    },[])
    return (
        <>
            <header>
            <div className=''>
                        <img  className='img-thumbnail'
                        style={{
                            width: 600,
                            height: 120,
                            marginRight: '1rem'
                        }}
                        src={logo} alt="logo" />
                    </div>
            </header>
            <nav className="p-0 m-0 responsive__nav">
            <div className="container-fluid p-0 m-0">
                        <ul className='m-0 bg-primary w-100 d-flex flex-row flex-wrap justify-content-around'>
                            <div className='navbar-nav d-flex flex-row'>
                                <li className="nav-item">
                                    <NavLink 
                                    className={({isActive}) => {
                                        return isActive ? 
                                        'nav-link d-flex align-items-center gap-1 item-activo item-custom':
                                        'nav-link d-flex align-items-center gap-1 item-custom';
                                    }} 
                                    aria-current="page" 
                                    to='/' >
                                        <AiFillHome className='font-1 pointer-none'></AiFillHome>
                                        INICIO
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                    className={({isActive}) => {
                                        return isActive ? 
                                        'nav-link d-flex align-items-center gap-1 item-activo item-custom':
                                        'nav-link d-flex align-items-center gap-1 item-custom';
                                    }} 
                                    aria-current="page"
                                    to="/nosotros">
                                        <HiUserGroup className='font-1 pointer-none'></HiUserGroup> 
                                        SOBRE NOSOTROS</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={({isActive}) => {
                                        return isActive ? 
                                        'nav-link d-flex align-items-center gap-1 item-activo item-custom':
                                        'nav-link d-flex align-items-center gap-1 item-custom';
                                    }}  
                                    aria-current="page" 
                                    to="/servicios">
                                    <MdMedicalServices className='font-1 pointer-none'></MdMedicalServices>
                                    SERVICIOS</NavLink>
                                </li>
                                <li className="nav-item">
                                    {
                                        menuApp ? 
                                        (<LinkMenu to={pagesWeb(menuApp.permisos)}
                                        className='nav-link d-flex align-items-center gap-1 item-custom'>
                                        <MdSpaceDashboard className='font-1 pointer-none'></MdSpaceDashboard>
                                        MENU DE APLICACIÓN
                                        </LinkMenu>) :
                                    (<NavLink className={({isActive}) => {
                                        return isActive ? 
                                        'nav-link d-flex align-items-center gap-1 item-activo item-custom':
                                        'nav-link d-flex align-items-center gap-1 item-custom';
                                    }} 
                                    aria-current="page" 
                                    to="/login">
                                    <FiLogIn className='font-1 pointer-none'></FiLogIn>
                                    INICIAR SESIÓN</NavLink>)
                                    }
                                </li>
                            </div>
                            <div className='navbar-nav d-flex flex-row'>
                                <li className="nav-item d-flex align-items-center">
                                    <NavLink className={({isActive}) => {
                                        return isActive ? 
                                        'nav-link d-flex align-items-center gap-1 item-unique item-activo-unique':
                                        'nav-link d-flex align-items-center gap-1 item-unique';
                                    }} 
                                    aria-current="page" 
                                    to="/cita-medica">
                                    <FaHandHoldingMedical className='font-1 pointer-none'></FaHandHoldingMedical>
                                    AGENDAR CITA MÉDICA</NavLink>
                                </li>
                            </div>
                        </ul>
            </div>
        </nav>
        </>
    );
}

export default Header;
import './../../styles/navbar.css';
import doctor from './../../assets/imgs/doctorIcon.png';
import addUserIcon from './../../assets/imgs/doctorIconMenu.png';
import espcialidadesMedicas from './../../assets/imgs/doctorEspecialidades.png';
import pdfimg from './../../assets/imgs/pdf.png';
import apagadoImg from './../../assets/imgs/apagado.png';
import { NavLink, Link } from 'react-router-dom';
import { useAppConfig } from './../../store/configAppStore';

const NavbarAdmin = ({info}) => {
    const appConfig = useAppConfig((state) => state.app);

    return (<>
        <div className="container__nav">
        <div className="container__description">
            <div className='container__icon'>
            <img className='icon__doctor' src={`${appConfig.hostServer}storage/${info.imagen}`} alt="director" />
            </div>
            <ul className='navbar-nav'>
                <li>{info.nombres}</li>
                <li>Director</li>
                <li> <Link className='text-white' to={'perfil'}> Editar Perfil </Link> </li>
            </ul>
        </div>
        <nav className="container_menu">
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <NavLink to='registro'
                    className={({isActive}) => {
                        return isActive ? 'nav-link text-white d-flex align-items-center gap-2 menu__item__active' 
                        : 'nav-link text-white d-flex align-items-center gap-2'
                    }}>
                        <img src={ addUserIcon } alt="nuevo usuarios" />
                        <span>Registrar nuevos usuarios</span>
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='especialidades'
                    className={({isActive}) => {
                        return isActive ? 'nav-link text-white d-flex align-items-center gap-2 menu__item__active' 
                        : 'nav-link text-white d-flex align-items-center gap-2'
                    }}>
                        <img src={espcialidadesMedicas}  alt="especialidades" />
                        <span>Especialidades medicas</span>
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='reportes'
                    className={({isActive}) => {
                        return isActive ? 'nav-link text-white d-flex align-items-center gap-2 menu__item__active' 
                        : 'nav-link text-white d-flex align-items-center gap-2'
                    }}>
                        <img src={pdfimg}  alt="" />
                        <span>Realizar reportes</span>
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/salir'
                    className={({isActive}) => {
                        return isActive ? 'nav-link text-white d-flex align-items-center gap-2 menu__item__active' 
                        : 'nav-link text-white d-flex align-items-center gap-2'
                    }}>
                        <img src={apagadoImg}  alt="" />
                        <span>Salir</span>
                    </NavLink>
                </li>
            </ul>
        </nav>

        </div>
    </>);
}

export default NavbarAdmin;
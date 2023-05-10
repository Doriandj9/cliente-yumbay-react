import './../../styles/navbar.css';
import doctor from './../../assets/imgs/doctorIcon.png';
import addUserIcon from './../../assets/imgs/doctorIconMenu.png';
import espcialidadesMedicas from './../../assets/imgs/doctorEspecialidades.png';
import pdfimg from './../../assets/imgs/pdf.png';
import apagadoImg from './../../assets/imgs/apagado.png';
import diagnostico  from './../../assets/imgs/diagnostico.png';
import { NavLink } from 'react-router-dom';


const NavbarDoctores = ({info}) => {
    return (<>
        <div className="container__nav">
        <div className="container__description">
            <div className='container__icon'>
            <img className='icon__doctor' src={doctor} alt="" />
            </div>
            <ul className='navbar-nav'>
                <li>{info.nombres}</li>
                <li>{info.cedula}</li>
                <li>{info.nombre_especialidad}</li>
            </ul>
        </div>
        <nav className="container_menu">
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <NavLink to='agenda'
                    className={({isActive}) => {
                        return isActive ? 'nav-link text-white d-flex align-items-center gap-2 menu__item__active' 
                        : 'nav-link text-white d-flex align-items-center gap-2'
                    }}>
                        <img src={ addUserIcon } alt="nuevo usuarios" />
                        <span>Citas médicas</span>
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='diagnostico'
                    className={({isActive}) => {
                        return isActive ? 'nav-link text-white d-flex align-items-center gap-2 menu__item__active' 
                        : 'nav-link text-white d-flex align-items-center gap-2'
                    }}>
                        <img src={diagnostico}  alt="" />
                        <span>Diagnostico</span>
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='consultas'
                    className={({isActive}) => {
                        return isActive ? 'nav-link text-white d-flex align-items-center gap-2 menu__item__active' 
                        : 'nav-link text-white d-flex align-items-center gap-2'
                    }}>
                        <img src={espcialidadesMedicas}  alt="especialidades" />
                        <span>Consultas de pacientes</span>
                    </NavLink>
                </li>
             
                <li className='nav-item'>
                    <NavLink to='reportes'
                    className={({isActive}) => {
                        return isActive ? 'nav-link text-white d-flex align-items-center gap-2 menu__item__active' 
                        : 'nav-link text-white d-flex align-items-center gap-2'
                    }}>
                        <img src={pdfimg}  alt="" />
                        <span>Reportes</span>
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


export default NavbarDoctores;
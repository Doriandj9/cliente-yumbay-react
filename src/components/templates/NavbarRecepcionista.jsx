import './../../styles/navbar.css';
import doctor from './../../assets/imgs/doctorIcon.png';
import addUserIcon from './../../assets/imgs/doctorIconMenu.png';
import espcialidadesMedicas from './../../assets/imgs/doctorEspecialidades.png';
import pdfimg from './../../assets/imgs/pdf.png';
import citamedica from './../../assets/imgs/cita-medica.png';
import apagadoImg from './../../assets/imgs/apagado.png';
import diagnostico  from './../../assets/imgs/diagnostico.png';
import { NavLink,Link } from 'react-router-dom';
import { useAppConfig } from './../../store/configAppStore';

const NavbarDoctores = ({info}) => {
    const appConfig = useAppConfig((state) => state.app);
    return (<>
        <div className="container__nav">
        <div className="container__description">
            <div className='container__icon'>
            <img className='icon__doctor' src={`${appConfig.hostServer}storage/${info.imagen}`} alt="" />
            </div>
            <ul className='navbar-nav'>
                <li>{info.nombres}</li>
                <li>{info.cedula}</li>
                <li>Recepcionista</li>
                <li> <Link className='text-white' to={'perfil'}> Editar Perfil </Link> </li>
            </ul>
        </div>
        <nav className="container_menu">
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <NavLink to='cita-medica'
                    className={({isActive}) => {
                        return isActive ? 'nav-link text-white d-flex align-items-center gap-2 menu__item__active' 
                        : 'nav-link text-white d-flex align-items-center gap-2'
                    }}>
                        <img src={ citamedica } alt="nuevas citas medicas" />
                        <span>Citas médicas</span>
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='reportes'
                    className={({isActive}) => {
                        return isActive ? 'nav-link text-white d-flex align-items-center gap-2 menu__item__active' 
                        : 'nav-link text-white d-flex align-items-center gap-2'
                    }}>
                        <img src={diagnostico}  alt="" />
                        <span>Reportes</span>
                    </NavLink>
                </li>
                {/* <li className='nav-item'>
                    <NavLink to='consultas'
                    className={({isActive}) => {
                        return isActive ? 'nav-link text-white d-flex align-items-center gap-2 menu__item__active' 
                        : 'nav-link text-white d-flex align-items-center gap-2'
                    }}>
                        <img src={espcialidadesMedicas}  alt="especialidades" />
                        <span>Consultas de pacientes</span>
                    </NavLink>
                </li> */}
             
                {/* <li className='nav-item'>
                    <NavLink to='reportes'
                    className={({isActive}) => {
                        return isActive ? 'nav-link text-white d-flex align-items-center gap-2 menu__item__active' 
                        : 'nav-link text-white d-flex align-items-center gap-2'
                    }}>
                        <img src={pdfimg}  alt="" />
                        <span>Reportes</span>
                    </NavLink>
                </li> */}
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
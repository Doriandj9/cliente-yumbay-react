import './../../styles/navbar.css';
import doctor from './../../assets/imgs/doctorIcon.png';
import addUserIcon from './../../assets/imgs/doctorIconMenu.png';
import { NavLink } from 'react-router-dom';
import { FcBusinessman } from 'react-icons/fc';
const NavbarAdmin = () => {
    return (<>
        <div className="container__nav">
        <div className="container__description">
            <div className='container__icon'>
            <img className='icon__doctor' src={doctor} alt="" />
            </div>
            <ul className='navbar-nav'>
                <li>Jose Perez</li>
                <li>Odontologi</li>
                <li>algo</li>
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
                        <img src={ addUserIcon } alt="" />
                        <span>Registrar nuevos usuarios</span>
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='otro'
                    className={({isActive}) => {
                        return isActive ? 'nav-link text-white d-flex align-items-center gap-2 menu__item__active' 
                        : 'nav-link text-white d-flex align-items-center gap-2'
                    }}>
                        <img src={addUserIcon}  alt="" />
                        <span>Registrar paciente</span>
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='otro'
                    className={({isActive}) => {
                        return isActive ? 'nav-link text-white d-flex align-items-center gap-2 menu__item__active' 
                        : 'nav-link text-white d-flex align-items-center gap-2'
                    }}>
                        <img src={addUserIcon}  alt="" />
                        <span>Registrar paciente</span>
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='otro'
                    className={({isActive}) => {
                        return isActive ? 'nav-link text-white d-flex align-items-center gap-2 menu__item__active' 
                        : 'nav-link text-white d-flex align-items-center gap-2'
                    }}>
                        <img src={addUserIcon}  alt="" />
                        <span>Registrar paciente</span>
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='otro'
                    className={({isActive}) => {
                        return isActive ? 'nav-link text-white d-flex align-items-center gap-2 menu__item__active' 
                        : 'nav-link text-white d-flex align-items-center gap-2'
                    }}>
                        <img src={addUserIcon}  alt="" />
                        <span>Registrar paciente</span>
                    </NavLink>
                </li>
            </ul>
        </nav>

        </div>
    </>);
}

export default NavbarAdmin;
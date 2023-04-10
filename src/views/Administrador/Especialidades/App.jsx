import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaList } from 'react-icons/fa';
import {MdOutlineAddCircle} from 'react-icons/md';
import { useEffect } from "react";
import './index.css';


const App = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('registro');
    },[])
    return (
        <>
        <h2 className="text-center">Selecione una opción</h2>
        <ul className="op__user">
            <li className="flex-grow-1">
            <NavLink className={({isActive}) => {
                return isActive ? 'nav__user_add nav__user_add__active d-flex flex-column align-items-center gap-1'
                :
                'nav__user_add d-flex flex-column align-items-center gap-1'
            }
             }
              to='registro'>
                <MdOutlineAddCircle style={{ fontSize: '1.5rem' }} />
                Registrar   
                </NavLink>
            </li>
            <li className="flex-grow-1">
            <NavLink className={({isActive}) => {
                return isActive ? 'nav__user_add nav__user_add__active d-flex flex-column align-items-center gap-1'
                :
                'nav__user_add d-flex flex-column align-items-center gap-1'
            }
             }
            to='lista'>
                <FaList style={{ fontSize: '1.5rem' }} />
                Listar
            </NavLink>
            </li>
        </ul>
        <Outlet />
        </>
    );
}

export default App;
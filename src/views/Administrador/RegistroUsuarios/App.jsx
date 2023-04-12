import { useEffect,useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {AiFillMedicineBox} from 'react-icons/ai';
import { FaNotesMedical } from 'react-icons/fa';
import './index.css';
const App = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('medico');
    },[])
    return (<>
        <h2 className="text-center">Registro de usuarios</h2>
        <p className="p-2">
            Esta sección le permite registrar en el sistema nuevos usuarios
            por medio de un formulario en el cual debe especificar que tipo de usuario desea suscribir 
            medicos o recepcionistas, ya que cada usuario contiene diferentes opciones registro.
        </p>
        <ul className="op__user">
            <li className="">
            <NavLink className={({isActive}) => {
                return isActive ? 'nav__user_add nav__user_add__active d-flex flex-column align-items-center gap-1'
                :
                'nav__user_add d-flex flex-column align-items-center gap-1'
            }
             }
              to='medico'>
                <AiFillMedicineBox style={{ fontSize: '1.5rem' }} />
               Registrar Medicos
                </NavLink>
            </li>
            <li className="flex-grow-1">
            <NavLink className={({isActive}) => {
                return isActive ? 'nav__user_add nav__user_add__active d-flex flex-column align-items-center gap-1'
                :
                'nav__user_add d-flex flex-column align-items-center gap-1'
            }
             }
            to='recepcionista'>
                <FaNotesMedical style={{ fontSize: '1.5rem' }} />
                Registrar Recepcionista
            </NavLink>
            </li>
        </ul>
        <Outlet />
    </>);
}

export default App;
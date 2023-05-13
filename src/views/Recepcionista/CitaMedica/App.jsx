import CitaMedica from "../../CitaMedica/CitaMedica";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {AiFillMedicineBox} from 'react-icons/ai';
import { FaNotesMedical } from 'react-icons/fa';
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useTitle } from "../../../utils/hooks/useTitle";
const App = () => {
    useTitle('Recepcion | Citas Medicas');
    const navigate = useNavigate();
    const params = useParams();
    useEffect(() => {
        if(!params.cedula){
            navigate('agendar');
        }
    },[])
   
    return (
        <>
        <h2 className='title-list mt-2 text-center'>Esta sección le permite agendar nuevas citas médicas y editarlas si el caso. </h2>
        <ul className="op__user mt-4">
            <li className="w-50">
            <NavLink className={({isActive}) => {
                return isActive ? 'nav__user_add nav__user_add__active d-flex flex-column align-items-center gap-1'
                :
                'nav__user_add d-flex flex-column align-items-center gap-1'
            }
             }
              to='agendar'>
                <AiFillMedicineBox style={{ fontSize: '1.5rem' }} />
               Agendar
                </NavLink>
            </li>
            <li className="flex-grow-1">
            <NavLink className={({isActive}) => {
                return isActive ? 'nav__user_add nav__user_add__active d-flex flex-column align-items-center gap-1'
                :
                'nav__user_add d-flex flex-column align-items-center gap-1'
            }
             }
            to='editar'>
                <FaNotesMedical style={{ fontSize: '1.5rem' }} />
                Editar
            </NavLink>
            </li>
        </ul>
           <Outlet />
        </>
    );
}

export default App;
/**
 * ------------- Opciones del objetos route --------------
 * [{
 *  action,
 * caseSensitive,
 * children,
 * path
 * element,
 * errorElement,
 * handle,
 * hasErrorBoundary,
 * id,
 * index, 
 * loader,
 * shouldRevalidate
 * }]
 */

import { Outlet } from "react-router-dom";
import App from "../../../views/Administrador/App";
import AppRegistro from './../../../views/Administrador/RegistroUsuarios/App';
import Medicos from "../../../views/Administrador/RegistroUsuarios/Medicos";
import Recepcionistas from "../../../views/Administrador/RegistroUsuarios/Recepcionistas";
import AppEspecialidades from "../../../views/Administrador/Especialidades/App";
const routesAdmin = {
    path: 'director',
    element: <App />,
    children:[
        {
            path: 'registro',
            element: (<AppRegistro /> ),
            children: [
                {
                    path: 'medico',
                    element: (<Medicos />)
                },
                {
                    path: 'recepcionista',
                    element: (<Recepcionistas />)
                }
            ]
        },
        {
            path: 'especialidades',
            element: <AppEspecialidades />
        }
    ]

}

export default routesAdmin;
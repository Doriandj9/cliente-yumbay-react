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

import App from "../../../views/Administrador/App";
import AppRegistro from './../../../views/Administrador/RegistroUsuarios/App';
import Medicos from "../../../views/Administrador/RegistroUsuarios/Medicos";
import Recepcionistas from "../../../views/Administrador/RegistroUsuarios/Recepcionistas";
import AppEspecialidades from "../../../views/Administrador/Especialidades/App";
import Lista from "../../../views/Administrador/Especialidades/Lista";
import Registro from "../../../views/Administrador/Especialidades/Registro";
const routesAdmin = {
    path: 'director',
    element: <App />,
    children:[
        {
            path: 'registro',
            element: <AppRegistro />,
            children: [
                {
                    path: 'medico',
                    element: <Medicos />
                },
                {
                    path: 'recepcionista',
                    element: <Recepcionistas />
                }
            ]
        },
        {
            path: 'especialidades',
            element: <AppEspecialidades />,
            children: [
                {
                    path: 'lista',
                    element: <Lista />
                },
                {
                    path: 'registro',
                    element: <Registro />
                }
            ]
        }
    ]

}

export default routesAdmin;
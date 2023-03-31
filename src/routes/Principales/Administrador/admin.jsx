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


const routesAdmin = {
    path: 'admin',
    element: <App />,
    children:[
        {

        }
    ]

}

export default routesAdmin;
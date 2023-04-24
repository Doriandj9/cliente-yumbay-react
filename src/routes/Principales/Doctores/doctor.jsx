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

import App from "../../../views/Doctores/App";

const routesDoctor = {
    path: '/doctores',
    element: <App />,

};

export default routesDoctor;
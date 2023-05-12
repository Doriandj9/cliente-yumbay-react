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

import App from "../../views/CitaMedica/App";




/**
 * Contine la ruta principal
 * 
 * @param {Object} routeCitaMedica
 */

const routeCitaMedica = {
    path: '/cita-medica',
    element: <App />
}

export {routeCitaMedica};

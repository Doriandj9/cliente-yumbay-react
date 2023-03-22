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

import CitaMedica from "../../views/CitaMedica/CitaMedica";




/**
 * Contine la ruta principal
 * 
 * @param {Object} routeCitaMedica
 */

const routeCitaMedica = {
    path: '/cita-medica',
    element: <CitaMedica />
}

export {routeCitaMedica};

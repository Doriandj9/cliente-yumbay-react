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

import App from "../../views/Login/App";

/**
 * Contine la ruta principal
 * 
 * @param {Object} routeLogin
 */

const routeLogin = {
    path: '/login',
    element:  <App />
}

export {routeLogin};

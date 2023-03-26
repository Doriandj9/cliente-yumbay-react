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

import { loginUser } from "../../utils/api/login";
import Login from "../../views/Login/Login";

/**
 * Contine la ruta principal
 * 
 * @param {Object} routeLogin
 */

const routeLogin = {
    path: '/login',
    element: <Login />
}

export {routeLogin};

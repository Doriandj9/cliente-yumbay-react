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

import App from "../../App";
import Logout from "../../components/Logout";
import Nosotros from "../../views/Home/Nosotros/Nosotros";
import Servicios from "../../views/Home/Servicios/Servicios";
import AppClave from "../../views/RecuperarClave/App";
/**
 * Contine la ruta principal
 * 
 * @param {Object} routeMain
 */

const routeMain = {
    path: '/',
    element: <App />,
    // loader: async ({request}) => {
    //     const query  = await fetch('https://jsonplaceholder.typicode.com/todos');
    //   return await query.json();
    // }
};

const routeNosotros = {
    path: '/nosotros',
    element: <Nosotros />
}
const routeLogout = {
    path: '/salir',
    element: <Logout />
}
const routeServicios = {
    path: '/servicios',
    element: <Servicios />
}

const routeRecovery = {
    path: '/recuperar/clave',
    element: <AppClave />
}

export {routeMain,routeNosotros,routeServicios,routeLogout,routeRecovery};
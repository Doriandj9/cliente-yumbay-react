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
import Contacto from "../../views/Home/Contacto/Contacto";
import Home from "../../views/Home/Home";
import Nosotros from "../../views/Home/Nosotros/Nosotros";
import Servicios from "../../views/Home/Servicios/Servicios";

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
const routeServicios = {
    path: '/servicios',
    element: <Servicios />
}
const routeContacto = {
    path: '/contacto',
    element: <Contacto />
}
export {routeMain,routeNosotros,routeContacto,routeServicios};
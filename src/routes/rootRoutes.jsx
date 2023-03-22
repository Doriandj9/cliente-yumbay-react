/**
 * esta variable contiene todas las rutas y subrutas 
 * de la aplicacion importadas desde los diferentes archivos
 * de rutas dentro de la carpeta roues
 * 
 * @var {Array} rootRoutes
 */

import { routeCitaMedica } from "./Principales/citaMedica";
import { routeContacto, routeMain, routeNosotros, routeServicios } from "./Principales/home";
import { routeLogin } from "./Principales/login";

const rootRoutes = [];
rootRoutes.push(routeMain,routeNosotros,routeServicios,routeContacto,routeCitaMedica,routeLogin);

export {rootRoutes};


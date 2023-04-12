/**
 * esta variable contiene todas las rutas y subrutas 
 * de la aplicacion importadas desde los diferentes archivos
 * de rutas dentro de la carpeta roues
 * 
 * @var {Array} rootRoutes
 */

import routesAdmin from "./Principales/Administrador/admin";
import { routeCitaMedica } from "./Principales/citaMedica";
import { routeMain, routeNosotros, routeServicios } from "./Principales/home";
import { routeLogin } from "./Principales/login";

const rootRoutes = [];
rootRoutes.push(routeMain,routeNosotros,routeServicios,routeCitaMedica,routeLogin,routesAdmin);

export {rootRoutes};


/**
 * esta variable contiene todas las rutas y subrutas 
 * de la aplicacion importadas desde los diferentes archivos
 * de rutas dentro de la carpeta roues
 * 
 * @var {Array} rootRoutes
 */

import routesAdmin from "./Principales/Administrador/admin";
import routesDoctor from "./Principales/Doctores/doctor";
import { routeCitaMedica } from "./Principales/citaMedica";
import { routeMain, routeNosotros, routeServicios,routeLogout } from "./Principales/home";
import { routeLogin } from "./Principales/login";

const rootRoutes = [];
rootRoutes.push(
    routeMain,routeNosotros,routeServicios, routesDoctor,
    routeCitaMedica,routeLogin,routesAdmin,routeLogout
    );

export {rootRoutes};


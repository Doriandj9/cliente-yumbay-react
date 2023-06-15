/**
 * esta variable contiene todas las rutas y subrutas 
 * de la aplicacion importadas desde los diferentes archivos
 * de rutas dentro de la carpeta roues
 * 
 * @var {Array} rootRoutes
 */

import PageNotFound from "../components/PageNotFound";
import routesAdmin from "./Principales/Administrador/admin";
import routesDoctor, { routeDoctorCita } from "./Principales/Doctores/doctor";
import routeRecepcionista from "./Principales/Recepcionista/recepcionista";
import { routeCitaMedica } from "./Principales/citaMedica";
import { routeMain, routeNosotros, routeServicios,routeLogout,routeRecovery } from "./Principales/home";
import { routeLogin } from "./Principales/login";
const error404 = {
    path: '*',
    element: <PageNotFound />
};
const rootRoutes = [];
rootRoutes.push(
    routeMain,routeNosotros,routeServicios, routeRecovery, routesDoctor,
    routeCitaMedica,routeLogin,routesAdmin,routeLogout,
    routeDoctorCita,routeRecepcionista,error404
    );

export {rootRoutes};


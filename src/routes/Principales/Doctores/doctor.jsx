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

import App from "../../../views/Doctores/App";
import AppAgenda from "../../../views/Doctores/Agenda/App";
import AppConsultas from "../../../views/Doctores/Consultas/App";
import AppReportes from "../../../views/Doctores/Reportes/App";
import AppDiagnostico from "../../../views/Doctores/Diagnostico/App";
import AppReceta from '../../../views/Doctores/Diagnostico/Reporte/App';
import AppFichas from '../../../views/Doctores/Consultas/Ficha/App';
import AppCitaMedica from "../../../views/Doctores/CitaMedica/App";
import Perfil from "../../../components/Perfil";
const routesDoctor = {
    path: '/doctores',
    element: <App />,
    children: [
        {
            path: 'agenda',
            element: <AppAgenda />
        },
        {
            path: 'diagnostico',
            element: <AppDiagnostico />
        },
        {
            path: 'diagnostico/:cedula',
            element: <AppDiagnostico />
        },
        {
            path: 'consultas',
            element: <AppConsultas />,
        },
        {
            path: 'consultas/fichas-medicas/:cedula',
            element: <AppFichas />,
        },
        {
            path: 'cita-medica',
            element: <AppCitaMedica />
        },
        {
            path: 'reportes',
            element: <AppReportes />
        },
        {
            path: 'perfil',
            element: <Perfil />
        }
    ]
};
const routeDoctorCita = {
    path: '/doctores/cita-medica/reporte',
    element: <AppReceta />
}

export { routeDoctorCita }
export default routesDoctor;
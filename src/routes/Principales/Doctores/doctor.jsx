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
            path: 'consultas',
            element: <AppConsultas />
        },
        {
            path: 'reportes',
            element: <AppReportes />
        }
    ]
};

export default routesDoctor;
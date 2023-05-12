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
import App from './../../../views/Recepcionista/App';
import AppReportes from './../../../views/Recepcionista/Reportes/App';
import AppCitas from './../../../views/Recepcionista/CitaMedica/App';
import AppAgenda from '../../../views/Recepcionista/CitaMedica/Agenda/Agendar';
import AppEditar from './../../../views/Recepcionista/CitaMedica/Editar/App';

const routeRecepcionista = {
    path: 'recepcionista',
    element: <App />,
    children: [
        {
            path:'cita-medica',
            element: <AppCitas />,
            children: [
                {
                    path:'agendar',
                    element: <AppAgenda />
                },
                {
                    path:'editar',
                    element: <AppEditar />
                }
            ]
        },
        {
            path: 'reportes',
            element: <AppReportes />
        }
    ]
}

export default routeRecepcionista;
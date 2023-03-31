
const pagesWeb = (permisos = null) => {
    const routesAndPermision = {
        1: '/recepcion',
        4: '/doctores',
        16: '/admin',
        0: '/',
        'default': '/page-not-found'
    };

    const paht = permisos === null ? 'default' : permisos;
    const routeRedirect = routesAndPermision[paht];
    return routeRedirect;
}

export {pagesWeb};
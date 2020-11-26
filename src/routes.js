/**
 * Set routes
 * @author Luz Carrillo
 * @param {Object} $routeProvider -
 * @param {Object} $routeProvider -
 * @return {Object} - All routes
 */
function Service($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('')
  $routeProvider
    .when('/', {      
      template: '<otrosReportesSeleccion-comp></otrosReportesSeleccion-comp>'
      //template: '<dashboard-comp></dashboard-comp>'
    })
    .when('/fuerzaVentas', {
      template: '<fuerzaVentas-comp></fuerzaVentas-comp>'
    })
    .when('/pyc', {
      template: '<pyc-comp></pyc-comp>'
    })
    .when('/movimientosBancarios', {
      template: '<movimientosBancarios-comp></movimientosBancarios-comp>'
    })
    .when('/reporteDinamico', {
      template: '<reporteDinamico-comp></reporteDinamico-comp>'
    })
    .when('/otrosReportes', {
      template: '<otrosReportes-comp></otrosReportes-comp>'
    })
    .when('/otrosReportesSeleccion', {
      template: '<otrosReportesSeleccion-comp></otrosReportesSeleccion-comp>'
    })
    .when('/catalogoDirectoras', {
      template: '<catalogoDirectoras-comp></catalogoDirectoras-comp>'
    })
    .when('/catalogoGerentes', {
      template: '<catalogoGerentes-comp></catalogoGerentes-comp>'
    })
    .when('/catalogoCoordinadores', {
      template: '<catalogoCoordinadores-comp></catalogoCoordinadores-comp>'
    })
    .otherwise({
      redirectTo: '/'
    })
}

const appConfig = ['$routeProvider', '$locationProvider', Service]

export default appConfig

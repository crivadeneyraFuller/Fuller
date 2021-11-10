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
    .when('/fullerettesActivasZonas', {
      template: '<fullerettesActivasZonas-comp></fullerettesActivasZonas-comp>'
    })
    .when('/fullerettesBajas', {
      template: '<fullerettesBajas-comp></fullerettesBajas-comp>'
    })
    .when('/planeacionVentas', {
      template: '<planeacionVentas-comp></planeacionVentas-comp>'
    })
    .when('/planeacionVentasDistrito', {
      template: '<planeacionVentasDistrito-comp></planeacionVentasDistrito-comp>'
    })
    .when('/detalleContratosCampana', {
      template: '<detalleContratosCampana-comp></detalleContratosCampana-comp>'
    })
    .when('/prestige', {
      template: '<prestige-comp></prestige-comp>'
    })
    .when('/puntoQuiebre', {
      template: '<puntoQuiebre-comp></puntoQuiebre-comp>'
    })
    .when('/valesGasolina', {
      template: '<valesGasolina-comp></valesGasolina-comp>'
    })
    .when('/stellargerentes', {
      template: '<stellarGerentes-comp></stellarGerentes-comp>'
    })
    .when('/stellardirectoras', {
      template: '<stellarDirectoras-comp></stellarDirectoras-comp>'
    })
    .when('/bonoscaminoexito', {
      template: '<bonosCaminoExito-comp></bonosCaminoExito-comp>'
    })
    .when('/indicadoresdistrito', {
      template: '<indicadoresDistrito-comp></bonosCaminoExito-comp>'
    })
    .when('/indicadoresdivision', {
      template: '<indicadoresDivision-comp></bonosCaminoExito-comp>'
    })
    .when('/indicadoreszonas', {
      template: '<indicadoresZonas-comp></bonosCaminoExito-comp>'
    })
    .when('/seguimientocontratos', {
      template: '<seguimientoContratos-comp></seguimientoContratos-comp>'
    })
    .when('/convencionce', {
      template: '<convencionce-comp></convencionce-comp>'
    })
    .when('/convencionge', {
      template: '<convencionge-comp></convencionge-comp>'
    })
    .when('/seguimientospagos', {
      template: '<seguimientosPagos-comp></seguimientosPagos-comp>'
    })
    .when('/segmentacionfullerettes', {
      template: '<segmentacionFullerettes-comp></segmentacionFullerettes-comp>'
    })
    .when('/ventasopibi', {
      template: '<ventasopibi-comp></ventasopibi-comp>'
    })
    .when('/ventasopibidivision', {
      template: '<ventasopibidivision-comp></ventasopibidivision-comp>'
    })
    .when('/ventasopibidistrito', {
      template: '<ventasopibidistrito-comp></ventasopibidistrito-comp>'
    })
    .when('/ventasopibizona', {
      template: '<ventasopibizona-comp></ventasopibizona-comp>'
    })
    .when('/iniciativas', {
      template: '<iniciativas-comp></iniciativas-comp>'
    })
    .when('/ventaslideres', {
      template: '<recuperacionlideresventa-comp></recuperacionlideresventa-comp>'
    })
    .when('/promocionactividad', {
      template: '<promocionactividad-comp></promocionactividad-comp>'
    })
    .when('/brigadacontratos', {
      template: '<brigadacontratos-comp></brigadacontratos-comp>'
    })
    .otherwise({
      redirectTo: '/'
    })
}

const appConfig = ['$routeProvider', '$locationProvider', Service]

export default appConfig

import pug from './appRoot.pug'

function Controller(appData, openApp, $scope, $filter, $rootScope) {
  const ctrl = this
  $rootScope.linkDetail = 1;

  ctrl.$onInit = function () {
    ctrl.openApp = openApp[ctrl.app || appData.appName]
  }

  ctrl.setMaxAnioMovimientosBancarios = () => {
    ctrl.openApp.createGenericObject({
      variable: {
        qStringExpression: "=$(vAnioMaxMov)"
      }
    }, function (reply) {
      ctrl.anioMovimientos = Number(reply.variable)
      ctrl.openApp.field('Year').selectValues([ctrl.anioMovimientos])
      ctrl.openApp.destroySessionObject(reply.qInfo.qId)
    })
  }

/* Reset selection to year and month*/
  ctrl.setCurrentYearBlock = () => {
    ctrl.openApp.createGenericObject({
      variable: {
        qStringExpression: "=$(vAnioMax)"
      }
    }, function (replyYear) {
      ctrl.openApp.destroySessionObject(replyYear.qInfo.qId)
      ctrl.openApp.field('Año').selectMatch(`${replyYear.variable}`, true, true)
        .then(
          function () {
            ctrl.openApp.createGenericObject({
                variable: {
                  qStringExpression: "=$(vMaxBloque)"
                }
              },
              function (replyBloque) {
                ctrl.openApp.destroySessionObject(replyBloque.qInfo.qId)
                ctrl.openApp.field('Bloque').selectMatch(replyBloque.variable, true, true)
              })
          })
    })
  }
  /*
   * cambio de seleccion segun actual ruta y next ruta
   * @param { String } next - la siguiente ruta
   * @param { String } curr - la ruta actual
   * @param { String } ev - eventos de la funcion
   */
  $scope.$on('$routeChangeStart', function (ev, next, curr) {
    if (next != undefined) { // Next es cambio de ruta
      if (curr != undefined) { // Curr es a la ruta actual
        // si te rediriges a movimientosBancarios limpia seleccion
        if (next && next.$$route && next.$$route.originalPath == '/movimientosBancarios') {
          ctrl.openApp.clearAll();
          ctrl.setMaxAnioMovimientosBancarios();
        }
        // si te rediriges a ReporteDinamico limpia seleccion
        else if (next && next.$$route && next.$$route.originalPath == '/reporteDinamico') {
          ctrl.openApp.clearAll();
        }
        // si te rediriges a ReporteDinamico limpia seleccion
        else if (next && next.$$route && next.$$route.originalPath == '/otrosReportes') {
          ctrl.openApp.clearAll();
        }
        // si estas en movimientosBancarios y rediriges a otro te da la seleccion default
        else if (curr && curr.$$route && curr.$$route.originalPath == '/movimientosBancarios' && next && next.$$route && next.$$route.originalPath != '/movimientosBancarios') {
          ctrl.openApp.clearAll();
          ctrl.setCurrentYearBlock();
        }
        // si estas en ReporteDinamico y rediriges a otro te da la seleccion default
        else if (curr && curr.$$route && curr.$$route.originalPath == '/reporteDinamico' && next && next.$$route && next.$$route.originalPath != '/reporteDinamico') {
          ctrl.openApp.clearAll();
          ctrl.setCurrentYearBlock();
        }
        // si estas en ReporteDinamico y rediriges a otro te da la seleccion default
        else if (curr && curr.$$route && curr.$$route.originalPath == '/otrosReportes' && next && next.$$route && next.$$route.originalPath != '/otrosReportes') {
          ctrl.openApp.clearAll();
          ctrl.setCurrentYearBlock();
        }
        // si estas en ReporteDinamico y rediriges a otro te da la seleccion default
        else if (curr && curr.$$route && curr.$$route.originalPath == '/catalogoDirectoras' && next && next.$$route && next.$$route.originalPath != '/catalogoDirectoras') {
          ctrl.openApp.clearAll();
          ctrl.setCurrentYearBlock();
        }
        else if (curr && curr.$$route && curr.$$route.originalPath == '/catalogoGerentes' && next && next.$$route && next.$$route.originalPath != '/catalogoGerentes') {
          ctrl.openApp.clearAll();
          ctrl.setCurrentYearBlock();
        }
        else if (curr && curr.$$route && curr.$$route.originalPath == '/catalogoCoordinadores' && next && next.$$route && next.$$route.originalPath != '/catalogoCoordinadores') {
          ctrl.openApp.clearAll();
          ctrl.setCurrentYearBlock();
        }
        else if (curr && curr.$$route && curr.$$route.originalPath == '/fullerettesActivasZonas' && next && next.$$route && next.$$route.originalPath != '/fullerettesActivasZonas') {
          ctrl.openApp.clearAll();
          ctrl.setCurrentYearBlock();
        }
        else if (curr && curr.$$route && curr.$$route.originalPath == '/fullerettesBajas' && next && next.$$route && next.$$route.originalPath != '/fullerettesBajas') {
          ctrl.openApp.clearAll();
          ctrl.setCurrentYearBlock();
        }
        else if (curr && curr.$$route && curr.$$route.originalPath == '/planeacionVentas' && next && next.$$route && next.$$route.originalPath != '/planeacionVentas') {
          ctrl.openApp.clearAll();
          ctrl.setCurrentYearBlock();
        }
        else if (curr && curr.$$route && curr.$$route.originalPath == '/planeacionVentasDistrito' && next && next.$$route && next.$$route.originalPath != '/planeacionVentasDistrito') {
          ctrl.openApp.clearAll();
          ctrl.setCurrentYearBlock();
        }
        else if (curr && curr.$$route && curr.$$route.originalPath == '/detalleContratosCampana' && next && next.$$route && next.$$route.originalPath != '/detalleContratosCampana') {
          ctrl.openApp.clearAll();
          ctrl.setCurrentYearBlock();
        }
        else if (curr && curr.$$route && curr.$$route.originalPath == '/prestige' && next && next.$$route && next.$$route.originalPath != '/prestige') {
          ctrl.openApp.clearAll();
          ctrl.setCurrentYearBlock();
        }
        else if (curr && curr.$$route && curr.$$route.originalPath == '/puntoQuiebre' && next && next.$$route && next.$$route.originalPath != '/puntoQuiebre') {
          ctrl.openApp.clearAll();
          ctrl.setCurrentYearBlock();
        }
        else if (curr && curr.$$route && curr.$$route.originalPath == '/valesGasolina' && next && next.$$route && next.$$route.originalPath != '/valesGasolina') {
          ctrl.openApp.clearAll();
          ctrl.setCurrentYearBlock();
        }
        else if (curr && curr.$$route && curr.$$route.originalPath == '/stellargerentes' && next && next.$$route && next.$$route.originalPath != '/stellargerentes') {
          ctrl.openApp.clearAll();
          ctrl.setCurrentYearBlock();
        }
        else if (curr && curr.$$route && curr.$$route.originalPath == '/stellardirectoras' && next && next.$$route && next.$$route.originalPath != '/stellardirectoras') {
          ctrl.openApp.clearAll();
          ctrl.setCurrentYearBlock();
        }
        else if (curr && curr.$$route && curr.$$route.originalPath == '/bonoscaminoexito' && next && next.$$route && next.$$route.originalPath != '/bonoscaminoexito') {
          ctrl.openApp.clearAll();
          ctrl.setCurrentYearBlock();
        }
        else if (curr && curr.$$route && curr.$$route.originalPath == '/indicadoresdistrito' && next && next.$$route && next.$$route.originalPath != '/indicadoresdistrito') {
          ctrl.openApp.clearAll();
          ctrl.setCurrentYearBlock();
        }
        else if (curr && curr.$$route && curr.$$route.originalPath == '/indicadoresdivision' && next && next.$$route && next.$$route.originalPath != '/indicadoresdivision') {
          ctrl.openApp.clearAll();
          ctrl.setCurrentYearBlock();
        }
        else if (curr && curr.$$route && curr.$$route.originalPath == '/indicadoreszonas' && next && next.$$route && next.$$route.originalPath != '/indicadoreszonas') {
          ctrl.openApp.clearAll();
          ctrl.setCurrentYearBlock();
        }
        else if (curr && curr.$$route && curr.$$route.originalPath == '/seguimientocontratos' && next && next.$$route && next.$$route.originalPath != '/seguimientocontratos') {
          ctrl.openApp.clearAll();
          ctrl.setCurrentYearBlock();
        }
        else if (curr && curr.$$route && curr.$$route.originalPath == '/convencionce' && next && next.$$route && next.$$route.originalPath != '/convencionce') {
          ctrl.openApp.clearAll();
          ctrl.setCurrentYearBlock();
        }
        else if (curr && curr.$$route && curr.$$route.originalPath == '/convencionge' && next && next.$$route && next.$$route.originalPath != '/convencionge') { 
          ctrl.openApp.clearAll();
          ctrl.setCurrentYearBlock();
        }
        else if (curr && curr.$$route && curr.$$route.originalPath == '/seguimientospagos' && next && next.$$route && next.$$route.originalPath != '/seguimientospagos') {
          ctrl.openApp.clearAll();
          ctrl.setCurrentYearBlock();
        }
        else if (curr && curr.$$route && curr.$$route.originalPath == '/segmentacionfullerettes' && next && next.$$route && next.$$route.originalPath != '/segmentacionfullerettes') {
          ctrl.openApp.clearAll();
          ctrl.setCurrentYearBlock();
        }
      }
      // Cuando se refresca en la misma pagina
      else {
        // cuando refrescas sobre MovBancarios se limpian
        if (next && next.$$route && next.$$route.originalPath  == '/movimientosBancarios') {
          ctrl.openApp.clearAll();
          ctrl.setMaxAnioMovimientosBancarios();
        }
        // cuando refrescas sobre ReporteDinamico se limpian
        else if (next && next.$$route && next.$$route.originalPath  == '/reporteDinamico' ) {
          ctrl.openApp.clearAll();
        }
        // cuando refrescas sobre Otros Reportes se limpian
        else if (next && next.$$route && next.$$route.originalPath  == '/otrosReportes' ) {
          ctrl.openApp.clearAll();
        }
        // cuando refrescas sobre Otros Reportes se limpian
        else if (next && next.$$route && next.$$route.originalPath  == '/catalogoDirectoras' ) {
          ctrl.openApp.clearAll();
        }
        // cuando refrescas sobre Otros Reportes se limpian
        else if (next && next.$$route && next.$$route.originalPath  == '/catalogoGerentes' ) {
          ctrl.openApp.clearAll();
        }
        // cuando refrescas sobre Otros Reportes se limpian
        else if (next && next.$$route && next.$$route.originalPath  == '/catalogoCoordinadores' ) {
          ctrl.openApp.clearAll();
        }
        // cuando refrescas sobre Otros Reportes se limpian
        else if (next && next.$$route && next.$$route.originalPath  == '/fullerettesActivasZonas' ) {
          ctrl.openApp.clearAll();
        }
        // cuando refrescas sobre Otros Reportes se limpian
        else if (next && next.$$route && next.$$route.originalPath  == '/fullerettesBajas' ) {
          ctrl.openApp.clearAll();
        }
        // cuando refrescas sobre Otros Reportes se limpian
        else if (next && next.$$route && next.$$route.originalPath  == '/planeacionVentas' ) {
          ctrl.openApp.clearAll();
        }
        // cuando refrescas sobre Otros Reportes se limpian
        else if (next && next.$$route && next.$$route.originalPath  == '/planeacionVentasDistrito' ) {
          ctrl.openApp.clearAll();
        }
        // cuando refrescas sobre Otros Reportes se limpian
        else if (next && next.$$route && next.$$route.originalPath  == '/detalleContratosCampana' ) {
          ctrl.openApp.clearAll();
        }
        // cuando refrescas sobre Otros Reportes se limpian
        else if (next && next.$$route && next.$$route.originalPath  == '/prestige' ) {
          ctrl.openApp.clearAll();
        }
        // cuando refrescas sobre Otros Reportes se limpian
        else if (next && next.$$route && next.$$route.originalPath  == '/puntoQuiebre' ) {
          ctrl.openApp.clearAll();
        }
        // cuando refrescas sobre Otros Reportes se limpian
        else if (next && next.$$route && next.$$route.originalPath  == '/valesGasolina' ) {
          ctrl.openApp.clearAll();
        }
        // cuando refrescas sobre Otros Reportes se limpian
        else if (next && next.$$route && next.$$route.originalPath  == '/stellargerentes' ) {
          ctrl.openApp.clearAll();
        }
        // cuando refrescas sobre Otros Reportes se limpian
        else if (next && next.$$route && next.$$route.originalPath  == '/stellardirectoras' ) {
          ctrl.openApp.clearAll();
        }
        // cuando refrescas sobre Otros Reportes se limpian
        else if (next && next.$$route && next.$$route.originalPath  == '/bonoscaminoexito' ) {
          ctrl.openApp.clearAll();
        }
        // cuando refrescas sobre Otros Reportes se limpian
        else if (next && next.$$route && next.$$route.originalPath  == '/indicadoresdistrito' ) {
          ctrl.openApp.clearAll();
        }
        // cuando refrescas sobre Otros Reportes se limpian
        else if (next && next.$$route && next.$$route.originalPath  == '/indicadoresdivision' ) {
          ctrl.openApp.clearAll();
        }
        // cuando refrescas sobre Otros Reportes se limpian
        else if (next && next.$$route && next.$$route.originalPath  == '/indicadoreszonas' ) {
          ctrl.openApp.clearAll();
        }
        // cuando refrescas sobre Otros Reportes se limpian
        else if (next && next.$$route && next.$$route.originalPath  == '/seguimientocontratos' ) {
          ctrl.openApp.clearAll();
        }
        // cuando refrescas sobre Otros Reportes se limpian
        else if (next && next.$$route && next.$$route.originalPath  == '/convencionce' ) {
          ctrl.openApp.clearAll();
        }
        // cuando refrescas sobre Otros Reportes se limpian
        else if (next && next.$$route && next.$$route.originalPath  == '/convencionge' ) {
         // cuando refrescas sobre Otros Reportes se limpianctrl.openApp.clearAll();
        }
         else if (next && next.$$route && next.$$route.originalPath  == '/seguimientospagos' ) {
          ctrl.openApp.clearAll();
        }
        else if (next && next.$$route && next.$$route.originalPath  == '/segmentacionfullerettes' ) {
         ctrl.openApp.clearAll();
       }
        // cuando refrescas sobre NO MovBancarios / ReporteDinamico se limpian
        else if (next && next.$$route && next.$$route.originalPath  != '/movimientosBancarios') {
          ctrl.openApp.clearAll();
          ctrl.setCurrentYearBlock();
        }
      }
    }
  });





}
const appRoot = {
  template: pug,
  controller: ['appData', 'openApp', '$scope', '$filter', '$rootScope', Controller]
}

export default appRoot

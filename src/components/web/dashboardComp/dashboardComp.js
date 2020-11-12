import pug from './dashboardComp.pug'
function Controller( openApp, qlik, appData, $scope, $rootScope) {
  const ctrl = this
  ctrl.data = [];
  ctrl.$onInit = function () {
    ctrl.openApp = openApp[appData.appName || ctrl.app]
    ctrl.mobile = ($(window).width() < 767) ? true : false;
    ctrl.cardVentas = appData.Ventas.General.tabla.Ventas;
    ctrl.cardPedidos = appData.Ventas.General.tabla.Pedidos;
    ctrl.cardAvo = appData.Ventas.General.tabla['AVO'];
    ctrl.cardActividad = appData.Ventas.General.tabla.Actividad;
    ctrl.graficaTendencia = appData.Ventas.General.objeto['Tendencia de Venta'];
    ctrl.graficaMapa = appData.Ventas.General.objeto['Venta por Division'];
    ctrl.graficaMapa2 = appData.Ventas.General.objeto['Mapa Plan'];
    ctrl.graficaMapa3 = appData.Ventas.General.objeto['Mapa %'];
    ctrl.graficaMapa4 = appData.Ventas.General.objeto['Tendencia de Venta Actividad'];
    ctrl.graficaReal = appData.Ventas.General.objeto['Real'];
    ctrl.graficaReal2 = appData.Ventas.General.objeto['Grafica Real Actividad con porcentaje'];
    ctrl.graficaVariacionPlan = appData.Ventas.General.objeto['%Variacion vs Plan'];
    ctrl.graficaVariacionCampana = appData.Ventas.General.objeto['%Variacion vs Camapaña Anterior'];
    ctrl.graficaVariacionAnioAnt = appData.Ventas.General.objeto['%Variacion Año Anterior'];
    ctrl.btnSelectVentas = appData.Ventas.General.objeto['Boton Distrito y Division'];
    ctrl.titleVentasTendencia = appData.Titulos.General.objeto.Tendencia;
    ctrl.titleVentasDivision = appData.Titulos.General.objeto.Division;
    ctrl.titleVentasRanking = appData.Titulos.General.objeto.Ranking;
    ctrl.openApp.variable.setStringValue('vIndicadorVentas', '1');
  }

  ctrl.vIndicadorVentas = 1;
  ctrl.mapaNum=1;
  ctrl.setVariable = (vVar, num) => {
    ctrl.openApp.variable.setStringValue(vVar, num)
    switch (vVar) {
      case 'vIndicadorVentas':
        ctrl.vIndicadorVentas = num;
        break
    }
  }
  ctrl.mapaSwitch = (num) => {
    ctrl.mapaNum = num;
    setTimeout(() => {
      ctrl.openApp.resize()
    },3000)
  };
}
const dashboardComp = {
  template: pug,
  controller: ['openApp','qlik', 'appData', '$scope', '$rootScope', Controller]
}
export default dashboardComp

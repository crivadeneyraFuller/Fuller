import pug from './movimientosBancariosComp.pug'

function Controller(appData, $scope, $rootScope, openApp) {
  const ctrl = this

  ctrl.$onInit = function () {
    ctrl.openApp = openApp[ctrl.app || appData.appName];
    ctrl.mobile = ($(window).width() < 767) ? true : false;
    ctrl.card1 = appData.movimientosBancarios.General.tabla.Depositos
    ctrl.card2 = appData.movimientosBancarios.General.tabla.Movimientos
    ctrl.card3 = appData.movimientosBancarios.General.tabla['Promedio de Movimientos']
    ctrl.tendencia = appData.movimientosBancarios.General.objeto['Tendencia de Depositos']
    ctrl.depositos = appData.movimientosBancarios.General.objeto['Depositos por Division']
    ctrl.detalle = appData.movimientosBancarios.General.objeto['Detalle de Movimientos']
  }
  ctrl.exportDataExcel = (idQlik) => {
    openApp['FullerApp_v1'].getObject(idQlik).then(function (vizModel) {
      vizModel.exportData().then(function (reply) {
        var link = document.createElement("a");
        link.href = reply.qUrl;
        link.download = reply.qUrl.substr(reply.qUrl.lastIndexOf("/") + 1);
        link.click();
        link.remove();
      });
    });
  };
  $scope.selectCard = function(num) {
    ctrl.cardVariable = num
  }
  ctrl.selectVar = (variable, value) => {
    ctrl.openApp.variable.setStringValue(variable, value).then(function () {
    });
  }
}

const movimientosBancariosComp = {
  template: pug,
  controller: ['appData', '$scope', '$rootScope', 'openApp', Controller]
}

export default movimientosBancariosComp

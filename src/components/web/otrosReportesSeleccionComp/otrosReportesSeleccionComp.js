import pug from './otrosReportesSeleccionComp.pug'

function Controller(appData, $scope, $rootScope, openApp) {
  const ctrl = this

  ctrl.$onInit = function () {
    ctrl.openApp = openApp[ctrl.app || appData.appName];
    ctrl.mobile = ($(window).width() < 767) ? true : false;
    ctrl.btnLista = appData.ReporteDinamico.General.objeto.Lista
    ctrl.Dimensiones = appData.ReporteDinamico.General.objeto.Dimensiones
    ctrl.Metricas = appData.ReporteDinamico.General.objeto.Metricas
    ctrl.Tabla = appData.ReporteDinamico.General.tabla.Tabla
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
}

const otrosReportesSeleccionComp = {
  template: pug,
  controller: ['appData', '$scope', '$rootScope', 'openApp', Controller]
}

export default otrosReportesSeleccionComp

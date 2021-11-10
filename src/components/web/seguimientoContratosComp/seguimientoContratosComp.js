import pug from './seguimientoContratosComp.pug'

function Controller(appData, $scope, $rootScope, openApp) {
    const ctrl = this
  
    ctrl.$onInit = function () {
      ctrl.openApp = openApp[ctrl.app || appData.appSeguimientoContratos];
      ctrl.mobile = ($(window).width() < 767) ? true : false;
      ctrl.Tabla = appData.SeguimientoContratosComp.General.tabla.Tabla
      ctrl.Tabla2 = appData.SeguimientoContratosComp.General.tabla.Tabla2
      ctrl.Tabla3 = appData.SeguimientoContratosComp.General.tabla.Tabla3
      ctrl.Filtro = appData.SeguimientoContratosComp.General.filtros.Filtro
      ctrl.Filtro2 = appData.SeguimientoContratosComp.General.filtros.Filtro2
      ctrl.Filtro3 = appData.SeguimientoContratosComp.General.filtros.Filtro3
      ctrl.Filtro4 = appData.SeguimientoContratosComp.General.filtros.Filtro4  
    }

    ctrl.exportDataExcel = (idQlik) => {
      openApp['SeguimientoContratos'].getObject(idQlik).then(function (vizModel) {
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
  
  const seguimientoContratosComp = {
    template: pug,
    controller: ['appData', '$scope', '$rootScope', 'openApp', Controller]
  }
  
  export default seguimientoContratosComp
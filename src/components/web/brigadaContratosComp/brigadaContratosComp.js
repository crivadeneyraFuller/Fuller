import pug from './brigadaContratosComp.pug'

function Controller(appData, $scope, $rootScope, openApp) {
    const ctrl = this
  
    ctrl.$onInit = function () {
      ctrl.openApp = openApp[ctrl.app || appData.appbrigadaContratos];
      ctrl.mobile = ($(window).width() < 767) ? true : false;
      ctrl.Tabla = appData.BrigadaContratosComp.General.tabla.Tabla
      ctrl.Filtro = appData.BrigadaContratosComp.General.filtros.Filtro
      ctrl.Filtro2 = appData.BrigadaContratosComp.General.filtros.Filtro2
      ctrl.Filtro3 = appData.BrigadaContratosComp.General.filtros.Filtro3
    }

    ctrl.exportDataExcel = (idQlik) => {
      openApp['BrigadaContratos'].getObject(idQlik).then(function (vizModel) {
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
  
  const brigadaContratosComp = {
    template: pug,
    controller: ['appData', '$scope', '$rootScope', 'openApp', Controller]
  }
  
  export default brigadaContratosComp
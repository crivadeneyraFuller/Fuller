import pug from './indicadoresZonasComp.pug'

function Controller(appData, $scope, $rootScope, openApp) {
    const ctrl = this
  
    ctrl.$onInit = function () {
      ctrl.openApp = openApp[ctrl.app || appData.appIndicadoresZonas];
      ctrl.mobile = ($(window).width() < 767) ? true : false;
      ctrl.Tabla = appData.ZonasComp.General.tabla.Tabla
      ctrl.Filtro = appData.ZonasComp.General.filtros.Filtro
      ctrl.Filtro2 = appData.ZonasComp.General.filtros.Filtro2
      ctrl.Filtro3 = appData.ZonasComp.General.filtros.Filtro3
      ctrl.Filtro4 = appData.ZonasComp.General.filtros.Filtro4
  
    }

    ctrl.exportDataExcel = (idQlik) => {
      openApp['Zonas'].getObject(idQlik).then(function (vizModel) {
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
  
  const indicadoresZonasComp = {
    template: pug,
    controller: ['appData', '$scope', '$rootScope', 'openApp', Controller]
  }
  
  export default indicadoresZonasComp
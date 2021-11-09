import pug from './ventasopibiZonaComp.pug'

function Controller(appData, $scope, $rootScope, openApp) {
    const ctrl = this
  
    ctrl.$onInit = function () {
      ctrl.openApp = openApp[ctrl.app || appData.appVentasopibiZona];
      ctrl.mobile = ($(window).width() < 767) ? true : false;
      ctrl.Tabla = appData.VentasopibizonaComp.General.tabla.Tabla
      ctrl.Filtro = appData.VentasopibizonaComp.General.filtros.Filtro
      ctrl.Filtro2 = appData.VentasopibizonaComp.General.filtros.Filtro2
      ctrl.Filtro3 = appData.VentasopibizonaComp.General.filtros.Filtro3
      ctrl.Filtro4 = appData.VentasopibizonaComp.General.filtros.Filtro4
      ctrl.Filtro5 = appData.VentasopibizonaComp.General.filtros.Filtro5

    }

    ctrl.exportDataExcel = (idQlik) => {
      openApp['VentasOPIBIZona'].getObject(idQlik).then(function (vizModel) {
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
  
  const ventasopibizonaComp = {
    template: pug,
    controller: ['appData', '$scope', '$rootScope', 'openApp', Controller]
  }
  
  export default ventasopibizonaComp
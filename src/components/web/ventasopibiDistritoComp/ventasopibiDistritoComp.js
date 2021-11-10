import pug from './ventasopibiDistritoComp.pug'

function Controller(appData, $scope, $rootScope, openApp) {
    const ctrl = this
  
    ctrl.$onInit = function () {
      ctrl.openApp = openApp[ctrl.app || appData.appVentasopibiDistrito];
      ctrl.mobile = ($(window).width() < 767) ? true : false;
      ctrl.Tabla = appData.VentasopibidistritoComp.General.tabla.Tabla
      ctrl.Filtro = appData.VentasopibidistritoComp.General.filtros.Filtro
      ctrl.Filtro2 = appData.VentasopibidistritoComp.General.filtros.Filtro2
      ctrl.Filtro3 = appData.VentasopibidistritoComp.General.filtros.Filtro3
      ctrl.Filtro4 = appData.VentasopibidistritoComp.General.filtros.Filtro4
      ctrl.Filtro5 = appData.VentasopibidistritoComp.General.filtros.Filtro5

    }

    ctrl.exportDataExcel = (idQlik) => {
      openApp['VentasOPIBIDistrito'].getObject(idQlik).then(function (vizModel) {
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
  
  const ventasopibidistritoComp = {
    template: pug,
    controller: ['appData', '$scope', '$rootScope', 'openApp', Controller]
  }
  
  export default ventasopibidistritoComp
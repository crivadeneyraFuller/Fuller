import pug from './ventasopibiDivisionComp.pug'

function Controller(appData, $scope, $rootScope, openApp) {
    const ctrl = this
  
    ctrl.$onInit = function () {
      ctrl.openApp = openApp[ctrl.app || appData.appVentasopibiDivision];
      ctrl.mobile = ($(window).width() < 767) ? true : false;
      ctrl.Tabla = appData.VentasopibidivisionComp.General.tabla.Tabla
      ctrl.Filtro = appData.VentasopibidivisionComp.General.filtros.Filtro
      ctrl.Filtro2 = appData.VentasopibidivisionComp.General.filtros.Filtro2
      ctrl.Filtro3 = appData.VentasopibidivisionComp.General.filtros.Filtro3
      ctrl.Filtro4 = appData.VentasopibidivisionComp.General.filtros.Filtro4
      ctrl.Filtro5 = appData.VentasopibidivisionComp.General.filtros.Filtro5

    }

    ctrl.exportDataExcel = (idQlik) => {
      openApp['VentasOPIBIDivision'].getObject(idQlik).then(function (vizModel) {
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
  
  const ventasopibidivisionComp = {
    template: pug,
    controller: ['appData', '$scope', '$rootScope', 'openApp', Controller]
  }
  
  export default ventasopibidivisionComp
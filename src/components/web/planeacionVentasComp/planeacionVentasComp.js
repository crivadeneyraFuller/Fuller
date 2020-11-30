import pug from './planeacionVentasComp.pug'

function Controller(appData, $scope, $rootScope, openApp) {
    const ctrl = this
  
    ctrl.$onInit = function () {
      ctrl.openApp = openApp[ctrl.app || appData.appPlaneacionVenta];
      ctrl.mobile = ($(window).width() < 767) ? true : false;
      ctrl.Tabla = appData.PlaneacionVentasComp.General.tabla.Tabla
      ctrl.Tabla2 = appData.PlaneacionVentasComp.General.tabla.Tabla2
      ctrl.Tabla3 = appData.PlaneacionVentasComp.General.tabla.Tabla3
      ctrl.Filtro = appData.PlaneacionVentasComp.General.filtros.Filtro
      ctrl.Filtro2 = appData.PlaneacionVentasComp.General.filtros.Filtro2
      ctrl.Filtro3 = appData.PlaneacionVentasComp.General.filtros.Filtro3
  
    }

    ctrl.exportDataExcel = (idQlik) => {
      openApp['Planeacion_Ventas'].getObject(idQlik).then(function (vizModel) {
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
  
  const planeacionventasComp = {
    template: pug,
    controller: ['appData', '$scope', '$rootScope', 'openApp', Controller]
  }
  
  export default planeacionventasComp
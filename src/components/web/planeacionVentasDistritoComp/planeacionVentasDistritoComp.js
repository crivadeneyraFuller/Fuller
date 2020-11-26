import pug from './planeacionVentasDistritoComp.pug'

function Controller(appData, $scope, $rootScope, openApp) {
    const ctrl = this
  
    ctrl.$onInit = function () {
      ctrl.openApp = openApp[ctrl.app || appData.appPlaneacionVentasDistrito];
      ctrl.mobile = ($(window).width() < 767) ? true : false;
      ctrl.Tabla = appData.PlaneacionVentasDistritoComp.General.tabla.Tabla
      ctrl.Tabla2 = appData.PlaneacionVentasDistritoComp.General.tabla.Tabla2
  
    }

    ctrl.exportDataExcel = (idQlik) => {
      openApp['PlaneacionVentasDistrito'].getObject(idQlik).then(function (vizModel) {
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
  
  const planeacionventasdistritoComp = {
    template: pug,
    controller: ['appData', '$scope', '$rootScope', 'openApp', Controller]
  }
  
  export default planeacionventasdistritoComp
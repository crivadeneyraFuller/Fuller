import pug from './catalogoCoordinadoresComp.pug'

function Controller(appData, $scope, $rootScope, openApp) {
    const ctrl = this
  
    ctrl.$onInit = function () {
      ctrl.openApp = openApp[ctrl.app || appData.appCatalogoCoordinadores];
      ctrl.mobile = ($(window).width() < 767) ? true : false;
      ctrl.Tabla = appData.CatalogoCoordinadoresComp.General.tabla.Tabla
  
    }

    ctrl.exportDataExcel = (idQlik) => {
      openApp['Catalogo_Coordinadores'].getObject(idQlik).then(function (vizModel) {
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
  
  const catalocoordinadoresComp = {
    template: pug,
    controller: ['appData', '$scope', '$rootScope', 'openApp', Controller]
  }
  
  export default catalocoordinadoresComp
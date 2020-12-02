import pug from './indicadoresDistritoComp.pug'

function Controller(appData, $scope, $rootScope, openApp) {
    const ctrl = this
  
    ctrl.$onInit = function () {
      ctrl.openApp = openApp[ctrl.app || appData.appIndicadoresDistrito];
      ctrl.mobile = ($(window).width() < 767) ? true : false;
      ctrl.Tabla = appData.DistritoComp.General.tabla.Tabla
      ctrl.Filtro = appData.DistritoComp.General.filtros.Filtro
      ctrl.Filtro2 = appData.DistritoComp.General.filtros.Filtro2
      ctrl.Filtro3 = appData.DistritoComp.General.filtros.Filtro3
      ctrl.Filtro4 = appData.DistritoComp.General.filtros.Filtro4
      ctrl.Filtro5 = appData.DistritoComp.General.filtros.Filtro5
  
    }

    ctrl.exportDataExcel = (idQlik) => {
      openApp['Distrito'].getObject(idQlik).then(function (vizModel) {
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
  
  const indicadoresDistritoComp = {
    template: pug,
    controller: ['appData', '$scope', '$rootScope', 'openApp', Controller]
  }
  
  export default indicadoresDistritoComp
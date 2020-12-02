import pug from './indicadoresDivisionComp.pug'

function Controller(appData, $scope, $rootScope, openApp) {
    const ctrl = this
  
    ctrl.$onInit = function () {
      ctrl.openApp = openApp[ctrl.app || appData.appIndicadoresDivision];
      ctrl.mobile = ($(window).width() < 767) ? true : false;
      ctrl.Tabla = appData.DivisionComp.General.tabla.Tabla
      ctrl.Filtro = appData.DivisionComp.General.filtros.Filtro
      ctrl.Filtro2 = appData.DivisionComp.General.filtros.Filtro2
      ctrl.Filtro3 = appData.DivisionComp.General.filtros.Filtro3
      ctrl.Filtro4 = appData.DivisionComp.General.filtros.Filtro4
  
    }

    ctrl.exportDataExcel = (idQlik) => {
      openApp['Division'].getObject(idQlik).then(function (vizModel) {
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
  
  const indicadoresDivisionComp = {
    template: pug,
    controller: ['appData', '$scope', '$rootScope', 'openApp', Controller]
  }
  
  export default indicadoresDivisionComp
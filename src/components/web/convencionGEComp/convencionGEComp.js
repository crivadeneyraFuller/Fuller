import pug from './convencionGEComp.pug'

function Controller(appData, $scope, $rootScope, openApp) {
    const ctrl = this
  
    ctrl.$onInit = function () {
      ctrl.openApp = openApp[ctrl.app || appData.appConvencionGE];
      ctrl.mobile = ($(window).width() < 767) ? true : false;
      ctrl.Tabla = appData.ConvencionGEComp.General.tabla.Tabla
      ctrl.Filtro = appData.ConvencionGEComp.General.filtros.Filtro
      ctrl.Filtro2 = appData.ConvencionGEComp.General.filtros.Filtro2
      ctrl.Filtro3 = appData.ConvencionGEComp.General.filtros.Filtro3
      ctrl.Filtro4 = appData.ConvencionGEComp.General.filtros.Filtro4
  
    }

    ctrl.exportDataExcel = (idQlik) => {
      openApp['ConvencionGE'].getObject(idQlik).then(function (vizModel) {
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
  
  const convenciongeComp = {
    template: pug,
    controller: ['appData', '$scope', '$rootScope', 'openApp', Controller]
  }
  
  export default convenciongeComp
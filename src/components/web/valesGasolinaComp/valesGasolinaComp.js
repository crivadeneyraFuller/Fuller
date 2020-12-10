import pug from './valesGasolinaComp.pug'

function Controller(appData, $scope, $rootScope, openApp) {
    const ctrl = this
  
    ctrl.$onInit = function () {
      ctrl.openApp = openApp[ctrl.app || appData.appValesGasolina];
      ctrl.mobile = ($(window).width() < 767) ? true : false;
      ctrl.Tabla = appData.ValesGasolinaComp.General.tabla.Tabla
      ctrl.Filtro = appData.ValesGasolinaComp.General.filtro.Filtro
      ctrl.Filtro2 = appData.ValesGasolinaComp.General.filtro.Filtro2
      ctrl.Filtro3 = appData.ValesGasolinaComp.General.filtro.Filtro3
      ctrl.Filtro4 = appData.ValesGasolinaComp.General.filtro.Filtro4
      ctrl.Filtro5 = appData.ValesGasolinaComp.General.filtro.Filtro5
  
    }

    ctrl.exportDataExcel = (idQlik) => {
      openApp['ValesGasolina'].getObject(idQlik).then(function (vizModel) {
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
  
  const valesGasolinaComp = {
    template: pug,
    controller: ['appData', '$scope', '$rootScope', 'openApp', Controller]
  }
  
  export default valesGasolinaComp
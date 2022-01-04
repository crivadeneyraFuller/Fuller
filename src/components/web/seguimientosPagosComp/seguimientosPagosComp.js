import pug from './seguimientosPagosComp.pug'

function Controller(appData, $scope, $rootScope, openApp) {
    const ctrl = this
  
    ctrl.$onInit = function () {
      ctrl.openApp = openApp[ctrl.app || appData.appSeguimientosPagos];
      ctrl.mobile = ($(window).width() < 767) ? true : false;
      ctrl.Tabla = appData.SeguimientosPagosComp.General.tabla.Tabla
      ctrl.Filtro = appData.SeguimientosPagosComp.General.filtros.Filtro
      ctrl.Filtro2 = appData.SeguimientosPagosComp.General.filtros.Filtro2
      ctrl.Filtro3 = appData.SeguimientosPagosComp.General.filtros.Filtro3
      ctrl.Filtro4 = appData.SeguimientosPagosComp.General.filtros.Filtro4
      ctrl.Filtro5 = appData.SeguimientosPagosComp.General.filtros.Filtro5
      ctrl.Filtro6 = appData.SeguimientosPagosComp.General.filtros.Filtro6
      ctrl.Filtro7 = appData.SeguimientosPagosComp.General.filtros.Filtro7
      ctrl.Filtro8 = appData.SeguimientosPagosComp.General.filtros.Filtro8  
      ctrl.Filtro9 = appData.SeguimientosPagosComp.General.filtros.Filtro9  

      
      console.log(appData.appSeguimientosPagos)
    }

    ctrl.exportDataExcel = (idQlik) => {
      openApp['SeguimientosPagos'].getObject(idQlik).then(function (vizModel) {
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
  
  const seguimientosPagosComp = {
    template: pug,
    controller: ['appData', '$scope', '$rootScope', 'openApp', Controller]
  }
  
  export default seguimientosPagosComp
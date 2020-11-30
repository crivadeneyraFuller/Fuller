import pug from './detalleContratosCampanaComp.pug'

function Controller(appData, $scope, $rootScope, openApp) {
    const ctrl = this
  
    ctrl.$onInit = function () {
      ctrl.openApp = openApp[ctrl.app || appData.appDetalleContratosCampana];
      ctrl.mobile = ($(window).width() < 767) ? true : false;
      ctrl.Tabla = appData.DetalleContratosCampanaComp.General.tabla.Tabla
      ctrl.Filtro = appData.DetalleContratosCampanaComp.General.filtro.Filtro
      ctrl.Filtro2 = appData.DetalleContratosCampanaComp.General.filtro.Filtro2
      ctrl.Filtro3 = appData.DetalleContratosCampanaComp.General.filtro.Filtro3
      ctrl.Filtro4 = appData.DetalleContratosCampanaComp.General.filtro.Filtro4
      ctrl.Filtro5 = appData.DetalleContratosCampanaComp.General.filtro.Filtro5
      ctrl.KPI = appData.DetalleContratosCampanaComp.General.kpi.KPI
  
    }

    ctrl.exportDataExcel = (idQlik) => {
      openApp['DetalleContratosCampana'].getObject(idQlik).then(function (vizModel) {
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
  
  const detallecontratoscampanaComp = {
    template: pug,
    controller: ['appData', '$scope', '$rootScope', 'openApp', Controller]
  }
  
  export default detallecontratoscampanaComp
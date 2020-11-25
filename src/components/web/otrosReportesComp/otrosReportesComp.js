import pug from './otrosReportesComp.pug'
function Controller(appData, $scope, $rootScope, openApp, qlik) {
  const ctrl = this
  ctrl.$onInit = function () {
    ctrl.openApp = openApp[ ctrl.app || appData.appNameOtros ];
    ctrl.mobile = ($(window).width() < 767) ? true : false;
    ctrl.catalogoDirectoras = appData.Reporte.General.tabla.CatalogoDirectoras
    ctrl.tablaReportes = appData.Reporte.General.tabla.Tabla
  }
  ctrl.showFilter = () => {
    setTimeout(() => {
      qlik.resize();
    },1500)
  }
  ctrl.exportDataExcel = (idQlik) => {
    openApp['FullerApp_Reporte_v2'].getObject(idQlik).then(function (vizModel) {
      vizModel.exportData().then(function (reply) {
        var link = document.createElement("a");
        link.href = reply.qUrl;
        link.download = reply.qUrl.substr(reply.qUrl.lastIndexOf("/") + 1);
        link.click();
        link.remove();
      });
    });
  };
  ctrl.vComparativoAnio1 = 0;
  ctrl.vComparativaMin1 = 0;
  ctrl.vComparativaMax1 = 0;
  ctrl.vComparativoAnio2 = 0;
  ctrl.vComparativaMin2 = 0;
  ctrl.vComparativaMax2 = 0;  
  ctrl.setVariable = (vVar, num) => {
    ctrl.openApp.variable.setStringValue(vVar, num)
    switch (vVar) {
      case 'vComparativoAnio1':
        ctrl.vComparativoAnio1 = num;
        break
      case 'vComparativaMin1':
        ctrl.vComparativaMin1 = num;
        break
      case 'vComparativaMax1':
        ctrl.vComparativaMax1 = num;
        break
      case 'vComparativoAnio2':
        ctrl.vComparativoAnio2 = num;
        break
      case 'vComparativaMin2':
        ctrl.vComparativaMin2 = num;
        break
      case 'vComparativaMax2':
        ctrl.vComparativaMax2 = num;
        break
    }
  }
}
const otrosReportesComp = {
  template: pug,
  controller: ['appData', '$scope', '$rootScope', 'openApp', 'qlik', Controller]
}
export default otrosReportesComp

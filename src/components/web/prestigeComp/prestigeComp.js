import pug from './prestigeComp.pug'

function Controller(appData, $scope, $rootScope, openApp) {
    const ctrl = this
  
    ctrl.$onInit = function () {
      ctrl.openApp = openApp[ctrl.app || appData.appPrestige];
      ctrl.mobile = ($(window).width() < 767) ? true : false;
      ctrl.Tabla = appData.PrestigeComp.General.tabla.Tabla
  
    }

    ctrl.exportDataExcel = (idQlik) => {
      openApp['Prestige'].getObject(idQlik).then(function (vizModel) {
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
  
  const prestigeComp = {
    template: pug,
    controller: ['appData', '$scope', '$rootScope', 'openApp', Controller]
  }
  
  export default prestigeComp
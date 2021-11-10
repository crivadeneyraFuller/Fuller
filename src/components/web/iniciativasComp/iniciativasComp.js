import pug from './iniciativasComp.pug'

function Controller(appData, $scope, $rootScope, openApp) {
    const ctrl = this
  
    ctrl.$onInit = function () {
      ctrl.openApp = openApp[ctrl.app || appData.appIniciativas];
      ctrl.mobile = ($(window).width() < 767) ? true : false;
      ctrl.Tabla = appData.IniciativasComp.General.tabla.Tabla
      ctrl.Filtro = appData.IniciativasComp.General.filtros.Filtro
      ctrl.Filtro2 = appData.IniciativasComp.General.filtros.Filtro2
      ctrl.Filtro3 = appData.IniciativasComp.General.filtros.Filtro3
      ctrl.Filtro4 = appData.IniciativasComp.General.filtros.Filtro4
      ctrl.Filtro5 = appData.IniciativasComp.General.filtros.Filtro5
      ctrl.Filtro6 = appData.IniciativasComp.General.filtros.Filtro6
      ctrl.Filtro7 = appData.IniciativasComp.General.filtros.Filtro7
      ctrl.Filtro8 = appData.IniciativasComp.General.filtros.Filtro8

    }

    ctrl.exportDataExcel = (idQlik) => {
      openApp['Iniciativas'].getObject(idQlik).then(function (vizModel) {
        vizModel.exportData().then(function (reply) {
          var link = document.createElement("a");
          link.href = reply.qUrl;
          link.download = reply.qUrl.substr(reply.qUrl.lastIndexOf("/") + 1);
          link.click();
          link.remove();
        });
      }).catch(function(err){

        console.log(idQlik);
        console.log('Error al tratar de descargar la tabla')
        console.log(err);

      });;
    };
  }
  
  const iniciativasComp = {
    template: pug,
    controller: ['appData', '$scope', '$rootScope', 'openApp', Controller]
  }
  
  export default iniciativasComp
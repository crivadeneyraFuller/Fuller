import pug from './promocionActividadComp.pug'

function Controller(appData, $scope, $rootScope, openApp) {
    const ctrl = this

    

    ctrl.$onInit = function () {
      ctrl.openApp = openApp[ctrl.app || appData.appPromocionActividad];
      ctrl.mobile = ($(window).width() < 767) ? true : false;
      ctrl.Tabla = appData.PromocionActividadComp.General.tabla.Tabla
      ctrl.KPI = 'ejKEY'
      ctrl.Filtro = appData.PromocionActividadComp.General.filtros.Filtro
      ctrl.Filtro2 = appData.PromocionActividadComp.General.filtros.Filtro2
      ctrl.Filtro3 = appData.PromocionActividadComp.General.filtros.Filtro3
      ctrl.Filtro4 = appData.PromocionActividadComp.General.filtros.Filtro4
      ctrl.Filtro5 = appData.PromocionActividadComp.General.filtros.Filtro5
      ctrl.Filtro6 = appData.PromocionActividadComp.General.filtros.Filtro6

      console.log(ctrl.KPI)
  
    }
    
    ctrl.exportDataExcel = (idQlik) => {
      openApp['PromocionActividad'].getObject(idQlik).then(function (vizModel) {
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
  
  const promocionActividadComp = {
    template: pug,
    controller: ['appData', '$scope', '$rootScope', 'openApp', Controller]
  }
  
  export default promocionActividadComp
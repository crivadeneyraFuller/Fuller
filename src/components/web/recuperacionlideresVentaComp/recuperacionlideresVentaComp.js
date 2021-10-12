import pug from './recuperacionlideresVentaComp.pug'

function Controller(appData, $scope, $rootScope, openApp) {
    const ctrl = this

    
    $scope.SectionVentaRecuperada_A = true
    $scope.SectionVentaRecuperada_B = false
    $("#BtnVentaRecuperada_A").css("background-color" , "#FDE8F1")
    $("#BtnVentaRecuperada_B").css("background-color" , "#F7F7F7")

  
    ctrl.$onInit = function () {
      ctrl.openApp = openApp[ctrl.app || appData.appRecuperacionLideresVenta];
      ctrl.mobile = ($(window).width() < 767) ? true : false;
      ctrl.Tabla = appData.RecuperacionLideresVentasComp.General.tabla.Tabla
      ctrl.Tabla2 = appData.RecuperacionLideresVentasComp.General.tabla.Tabla2
      ctrl.Filtro = appData.RecuperacionLideresVentasComp.General.filtros.Filtro
      ctrl.Filtro2 = appData.RecuperacionLideresVentasComp.General.filtros.Filtro2
      ctrl.Filtro3 = appData.RecuperacionLideresVentasComp.General.filtros.Filtro3
      ctrl.Filtro4 = appData.RecuperacionLideresVentasComp.General.filtros.Filtro4
      ctrl.Filtro5 = appData.RecuperacionLideresVentasComp.General.filtros.Filtro5
      ctrl.Filtro6 = appData.RecuperacionLideresVentasComp.General.filtros.Filtro6
  
    }
    
    ctrl.exportDataExcel = (idQlik) => {
      openApp['RecuperacionLideresVenta'].getObject(idQlik).then(function (vizModel) {
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


    

    ctrl.ClickTblVentaRecuperada_A = function () {

      $scope.SectionVentaRecuperada_A = true
      $scope.SectionVentaRecuperada_B = false
      $("#BtnVentaRecuperada_A").css("background-color" , "#FDE8F1")
      $("#BtnVentaRecuperada_B").css("background-color" , "#F7F7F7")

    };

    ctrl.ClickTblVentaRecuperada_B = function () {

      $scope.SectionVentaRecuperada_A = false
      $scope.SectionVentaRecuperada_B = true
      $("#BtnVentaRecuperada_A").css("background-color" , "#F7F7F7")
      $("#BtnVentaRecuperada_B").css("background-color" , "#FDE8F1")

    };


  }
  
  const recuperacionlideresVentaComp = {
    template: pug,
    controller: ['appData', '$scope', '$rootScope', 'openApp', Controller]
  }
  
  export default recuperacionlideresVentaComp
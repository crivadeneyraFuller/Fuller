import pug from './segmentacionFullerettesComp.pug'

function Controller(appData, $scope, $rootScope, openApp) {
    const ctrl = this
  
    $scope.Hoja1 = true
    $scope.Hoja2 = false

    $("#BtnHoja1").css("background-color" , "#FDE8F1")
    $("#BtnHoja2").css("background-color" , "#F7F7F7")

    ctrl.$onInit = function () {
      ctrl.openApp = openApp[ctrl.app || appData.appSegmentacionFullerettes];
      ctrl.mobile = ($(window).width() < 767) ? true : false;
      ctrl.Tabla = appData.SegmentacionFullerettesComp.General.tabla.Tabla
      ctrl.Filtro = appData.SegmentacionFullerettesComp.General.filtros.Filtro
      ctrl.Filtro2 = appData.SegmentacionFullerettesComp.General.filtros.Filtro2
      ctrl.Filtro3 = appData.SegmentacionFullerettesComp.General.filtros.Filtro3
      ctrl.Filtro4 = appData.SegmentacionFullerettesComp.General.filtros.Filtro4  
      ctrl.Filtro5 = appData.SegmentacionFullerettesComp.General.filtros.Filtro5  
      ctrl.Filtro6 = appData.SegmentacionFullerettesComp.General.filtros.Filtro6
      ctrl.Filtro7 = appData.SegmentacionFullerettesComp.General.filtros.Filtro7 
      ctrl.Filtro8 = appData.SegmentacionFullerettesComp.General.filtros.Filtro8 

      ctrl.Grafico = appData.SegmentacionFullerettesComp.General.graficos.Grafico
      ctrl.Grafico2 = appData.SegmentacionFullerettesComp.General.graficos.Grafico2
      ctrl.Grafico3 = appData.SegmentacionFullerettesComp.General.graficos.Grafico3
      ctrl.Grafico4 = appData.SegmentacionFullerettesComp.General.graficos.Grafico4

      ctrl.KPI = appData.SegmentacionFullerettesComp.General.kpi.KPI
      ctrl.KPI2 = appData.SegmentacionFullerettesComp.General.kpi.KPI2
      ctrl.KPI3 = appData.SegmentacionFullerettesComp.General.kpi.KPI3
      ctrl.KPI4 = appData.SegmentacionFullerettesComp.General.kpi.KPI4
      ctrl.KPI5 = appData.SegmentacionFullerettesComp.General.kpi.KPI5
      ctrl.KPI6 = appData.SegmentacionFullerettesComp.General.kpi.KPI6

      ctrl.Mapa = appData.SegmentacionFullerettesComp.General.mapa.Mapa

    }

    ctrl.exportDataExcel = (idQlik) => {
      openApp['SegmentacionFullerettes'].getObject(idQlik).then(function (vizModel) {
        vizModel.exportData().then(function (reply) {
          var link = document.createElement("a");
          link.href = reply.qUrl;
          link.download = reply.qUrl.substr(reply.qUrl.lastIndexOf("/") + 1);
          link.click();
          link.remove();
        });
      });
    };

    
    ctrl.ClickTblHoja1 = function () {

      $scope.Hoja1 = true
      $scope.Hoja2 = false

      $("#BtnHoja1").css("background-color" , "#FDE8F1")
      $("#BtnHoja2").css("background-color" , "#F7F7F7")

    };

    ctrl.ClickTblHoja2 = function () {

      $scope.Hoja1 = false
      $scope.Hoja2 = true
      $("#BtnHoja1").css("background-color" , "#F7F7F7")
      $("#BtnHoja2").css("background-color" , "#FDE8F1")

    };
    


  }
  
  const seguimientosFullerettesComp = {
    template: pug,
    controller: ['appData', '$scope', '$rootScope', 'openApp', Controller]
  }
  
  export default seguimientosFullerettesComp
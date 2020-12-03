import pug from './bonosCaminoExitoComp.pug'

function Controller(appData, $scope, $rootScope, openApp) {
    const ctrl = this
  
    $scope.SectionVenta = true
    $scope.SectionPedido = false
    $("#BtnVentas").css("background-color" , "#FDE8F1")
    $("#BtnPedidos").css("background-color" , "#F7F7F7")

    ctrl.$onInit = function () {
      ctrl.openApp = openApp[ctrl.app || appData.appBonoCaminoExito];
      ctrl.mobile = ($(window).width() < 767) ? true : false;
      ctrl.TablaVenta = appData.BonoCaminoExitoComp.General.tabla.TablaVenta
      ctrl.TablaPedido = appData.BonoCaminoExitoComp.General.tabla.TablaPedido
      ctrl.FiltroVentas = appData.BonoCaminoExitoComp.General.filtrosVentas.Filtro
      ctrl.FiltroVentas2 = appData.BonoCaminoExitoComp.General.filtrosVentas.Filtro2
      ctrl.FiltroVentas3 = appData.BonoCaminoExitoComp.General.filtrosVentas.Filtro3
      ctrl.FiltroVentas4 = appData.BonoCaminoExitoComp.General.filtrosVentas.Filtro4
      ctrl.FiltroVentas5 = appData.BonoCaminoExitoComp.General.filtrosVentas.Filtro5
      ctrl.FiltroPedido = appData.BonoCaminoExitoComp.General.filstrosPedido.Filtro
      ctrl.FiltroPedido2 = appData.BonoCaminoExitoComp.General.filstrosPedido.Filtro2
      ctrl.FiltroPedido3 = appData.BonoCaminoExitoComp.General.filstrosPedido.Filtro3
      ctrl.FiltroPedido4 = appData.BonoCaminoExitoComp.General.filstrosPedido.Filtro4
      ctrl.FiltroPedido5 = appData.BonoCaminoExitoComp.General.filstrosPedido.Filtro5
      ctrl.GraficosVenta = appData.BonoCaminoExitoComp.General.graficosVenta.Grafico
      ctrl.GraficosPedido = appData.BonoCaminoExitoComp.General.graficosPedido.Grafico
  
    }

    ctrl.exportDataExcel = (idQlik) => {
      openApp['BonoCaminoExito'].getObject(idQlik).then(function (vizModel) {
        vizModel.exportData().then(function (reply) {
          var link = document.createElement("a");
          link.href = reply.qUrl;
          link.download = reply.qUrl.substr(reply.qUrl.lastIndexOf("/") + 1);
          link.click();
          link.remove();
        });
      });
    };

    ctrl.ClickTblVenta = function () {

      $scope.SectionVenta = true
      $scope.SectionPedido = false
      $("#BtnVentas").css("background-color" , "#FDE8F1")
      $("#BtnPedidos").css("background-color" , "#F7F7F7")

    };

    ctrl.ClickTblPedido = function () {

      $scope.SectionVenta = false
      $scope.SectionPedido = true
      $("#BtnVentas").css("background-color" , "#F7F7F7")
      $("#BtnPedidos").css("background-color" , "#FDE8F1")

    };

  }
  
  const bonoCaminoExitoComp = {
    template: pug,
    controller: ['appData', '$scope', '$rootScope', 'openApp', Controller]
  }
  
  export default bonoCaminoExitoComp
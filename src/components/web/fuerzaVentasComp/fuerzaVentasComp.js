import pug from './fuerzaVentasComp.pug'

function Controller(appData, $scope, $rootScope, openApp) {
  const ctrl = this

  ctrl.$onInit = function () {
    ctrl.openApp = openApp[ctrl.app || appData.appName];
    ctrl.mobile = ($(window).width() < 767) ? true : false;
    
    ctrl.card1 = appData.FuerzaVentas.General.tabla.Stencil
    ctrl.card2 = appData.FuerzaVentas.General.tabla.Contratos
    ctrl.card3 = appData.FuerzaVentas.General.tabla.Reingresos
    ctrl.card4 = appData.FuerzaVentas.General.tabla.Bajas

    ctrl.fuerzaVentasTendencia = appData.FuerzaVentas.General.objeto['Tendencia de Reingresos y Bajas']
    ctrl.fuerzaVentasStencil = appData.FuerzaVentas.General.objeto.Stencil
    ctrl.fuerzaVentasCampana = appData.FuerzaVentas.General.objeto.Cordinadoras
    ctrl.fuerzaVentasContratos = appData.FuerzaVentas.General.objeto.Contratos
    ctrl.fuerzaVentasVPlan = appData.FuerzaVentas.General.objeto['Variacion vs Plan']
    ctrl.fuerzaVentasVCampana = appData.FuerzaVentas.General.objeto['%Variacion vs Camapaña Anterior']
    ctrl.fuerzaVentasVAnterior = appData.FuerzaVentas.General.objeto['% variacion vs Año Anterior']
    ctrl.kpiCoordinadoras = appData.FuerzaVentas.General.tabla['Cordinadoras Indicadores']
    ctrl.btnSelectFuerzaVentas = appData.FuerzaVentas.General.objeto['Boton Distrito y Division']
    // ctrl.selectVar("vFiltro_Fecha", ctrl.item.selected)
 
    ctrl.selState = ctrl.openApp.selectionState();
    ctrl.selState.OnData.bind(function (test) {
      let resultDataSegNeg = ctrl.selState.selections.find(data => data.fieldName == 'Segmento de Negocio'),
          resultDataUniNeg = ctrl.selState.selections.find(data => data.fieldName == 'Unidad de Negocio')
      if (!resultDataSegNeg) {
        $rootScope.$broadcast('ChangeSelectHeader', {
          'nameDimension': '[Segmento de Negocio]'
        })
      }
      if (!resultDataUniNeg) {
        $rootScope.$broadcast('ChangeSelectHeader', {
          'nameDimension': '[Unidad de Negocio]'
        })
      }
    });
  }
  $scope.selectCard = function(num) {
    ctrl.cardVariable = num
  }

  /**
   * Destroy component
   */
  $scope.$on("$destroy", () => {
    ctrl.$onDestroy();
    ctrl.selState.OnData.unbind()
  });

  ctrl.$onDestroy = function () {
    ctrl.selState.OnData.unbind()
  };

  /**
   *
   */
  // ctrl.linkToDetail = (tab) => {
  //   $rootScope.linkDetail = tab;
  //   location.href = '#/fuerzaVentas'
  // }

  $scope.$on('changeVar', (arg) => {
    switch (arg.targetScope.label) {
      case 1:
        ctrl.label = 'Venta'
        ctrl.labelGeo = ' '
        ctrl.labelTags1 = 'PPTO'
        ctrl.labelTags2 = 'PPTO'
        ctrl.labelTags3 = 'Año anterior'
        ctrl.labelTags4 = 'PPTO'
        break
      case 2:
        ctrl.label = 'Venta (unidades)'
        ctrl.labelGeo = '(unidades)'
        ctrl.labelTags1 = 'Año anterior'
        ctrl.labelTags2 = 'Año anterior'
        ctrl.labelTags3 = 'Año anterior'
        ctrl.labelTags4 = ' '
        break
      case 3:
        ctrl.label = '$ margen'
        ctrl.labelGeo = '($ margen)'
        ctrl.labelTags1 = 'Año anterior'
        ctrl.labelTags2 = 'Año anterior'
        ctrl.labelTags3 = 'Año anterior'
        ctrl.labelTags4 = ' '
        break
      case 4:
        ctrl.label = '% margen'
        ctrl.labelGeo = '(% margen)'
        ctrl.labelTags1 = 'Año anterior'
        ctrl.labelTags2 = 'Año anterior'
        ctrl.labelTags3 = 'Año anterior'
        ctrl.labelTags4 = ' '
        break
      default:
        ctrl.label = 'ventas'
    }
  })

  ctrl.selectVar = (variable, value) => {
    ctrl.openApp.variable.setStringValue(variable, value).then(function () {
    });
  }

  ctrl.label = $rootScope.label
  ctrl.labelGeo = $rootScope.label
  ctrl.labelTags1 = $rootScope.label
  ctrl.labelTags2 = $rootScope.label
  ctrl.labelTags3 = $rootScope.label
}

const fuerzaVentasComp = {
  template: pug,
  controller: ['appData', '$scope', '$rootScope', 'openApp', Controller]
}

export default fuerzaVentasComp

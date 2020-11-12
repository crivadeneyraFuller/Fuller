import pug from './pycComp.pug'
function Controller( openApp, qlik, appData, $scope, $rootScope) {
  const ctrl = this
  ctrl.data = [];
  ctrl.$onInit = function () {
    ctrl.openApp = openApp[appData.appName || ctrl.app]
    ctrl.mobile = ($(window).width() < 767) ? true : false;
    
    ctrl.cardCancel = appData.PyC.General.tabla.Cancelaciones;
    ctrl.cardCredito = appData.PyC.General.tabla['Notas de Credito'];
    ctrl.cardAdeudo = appData.PyC.General.tabla['Adeudo'];
    ctrl.cardCuentaMala = appData.PyC.General.tabla['Cuenta Mala'];
    ctrl.tendenciaCancel = appData.PyC.General.objeto['Tendencia de Cancelaciones'];
    ctrl.tendenciaCredito = appData.PyC.General.objeto['Tendencia de Notas de Credito'];
    
    ctrl.rankingCancel = appData.PyC.General.objeto['Ranking de Cancelaciones'];
    ctrl.rankingCancelPorcentaje = appData.PyC.General.objeto['Ranking de Cancelaciones %'];
    ctrl.rankingAdeudo = appData.PyC.General.objeto['Ranking de Adeudo'];
    ctrl.rankingAdeudoPorcentaje = appData.PyC.General.objeto['Ranking de Adeudo %'];
    

    ctrl.rankingCredito = appData.PyC.General.objeto['Ranking Notas de Credito'];
    ctrl.rankingCreditoPorcentaje = appData.PyC.General.objeto['Ranking Notas de Credito %'];
    
    ctrl.rankingCuentaMala = appData.PyC.General.objeto['Ranking de Cuenta Mala'];
    ctrl.rankingCuentaMalaPorcentaje = appData.PyC.General.objeto['Ranking de Cuenta Mala %'];
    


    ctrl.titleTendencia1 = appData.PyC.General.objeto['Titulo de Cancelaciones'];
    ctrl.titleTendencia2 = appData.PyC.General.objeto['Titutlo de Notas de Credito'];
    ctrl.titleRanking1 = appData.PyC.General.objeto['Titulo Rankign de Cancelaciones'];
    ctrl.titleRanking2 = appData.PyC.General.objeto['Titulos Ranking Notas de Credito'];
    ctrl.btnDyD = appData.PyC.General.objeto['Boton Distrito y Division'];
    ctrl.vVariableVentaPorcentaje1 = 1;
    ctrl.vVariablePorcentaje2 = 1;
    ctrl.openApp.variable.setStringValue('vVariableVentaPorcentaje1', '1');
    ctrl.openApp.variable.setStringValue('vVariablePorcentaje2', '1');
    ctrl.openApp.variable.setStringValue('vVariablePC', '1');
  }
  ctrl.rankNum=1;
  ctrl.rankNum2=1;
  ctrl.rankingSwitch = (num) => {
    ctrl.rankNum = num;
    setTimeout(() => {
        qlik.resize()
    },1000)
  };
  ctrl.rankingSwitch2 = (num) => {
    ctrl.rankNum2 = num;
    setTimeout(() => {
        qlik.resize()
    },1000)
  };


  ctrl.vVariablePC = 1;
  
  ctrl.mapaNum=1;
  ctrl.setVariable = (vVar, num) => {
    ctrl.openApp.variable.setStringValue(vVar, num)
    switch (vVar) {
      case 'vVariablePC':
        ctrl.vVariablePC = num;
        break
      case 'vVariableVentaPorcentaje1':
        ctrl.vVariableVentaPorcentaje1 = num;
        break
      case 'vVariablePorcentaje2':
        ctrl.vVariablePorcentaje2 = num;
        break
    }
  };
}
const pycComp = {
  template: pug,
  controller: ['openApp','qlik', 'appData', '$scope', '$rootScope', Controller]
}
export default pycComp

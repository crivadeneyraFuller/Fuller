
  import pug from './modalComp.pug'

  function Controller(openApp, $transclude, $scope,$rootScope, $element, qlik){
    const ctrl = this
    
    ctrl.$onInit = function(){
        ctrl.openApp = openApp[ctrl.app || appData.appName];
    }

    ctrl.cambioModal= () => {
      ctrl.modal = !ctrl.modal
      setTimeout(()=>{qlik.resize(),500})
    }

}
  const modalComp = {
    template: pug,
    controller: ['openApp', '$transclude', '$scope','$rootScope', '$element','qlik', Controller],
    controllerAs: 'modal',
    transclude: true,
    bindings: {
      title:'@',
      idObjs:'@'
    }
  }

  export default modalComp
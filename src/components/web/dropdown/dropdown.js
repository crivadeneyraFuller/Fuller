
  import pug from './dropdown.pug'

  function Controller(appData, openApp, $scope) {
    const ctrl = this
    ctrl.data = [];
    ctrl.options = ctrl.options.split(",");
    ctrl.options.forEach(element => {
      ctrl.data.push(element);
    });

    ctrl.url = [];
    ctrl.paths = ctrl.paths.split( "," );
    ctrl.paths.forEach( e => { ctrl.url.push( e ) } );

    ctrl.$onInit = function() {

    }
  }

  const dropdown = {
    template: pug,
    controller: ['appData', 'openApp', '$scope', Controller],
    bindings: {
      text:'@',
      options: '@',
      paths: '@'
    }
  }

  export default dropdown

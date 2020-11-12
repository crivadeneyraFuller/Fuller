
  import pug from './tooltip.pug'

  function Controller(appData) {
    const ctrl = this

    ctrl.$onInit = function() {}
  }

  const tooltip = {
    template: pug,
    controller: ['appData', Controller],
    bindings: {
      objId:'@',
      objData: '/',
      text:'@'
    }
  }

  export default tooltip
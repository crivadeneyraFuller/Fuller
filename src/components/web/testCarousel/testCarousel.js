
  import pug from './testCarousel.pug'

  function Controller(appData) {
    const ctrl = this

    ctrl.$onInit = function() {}
  }

  const testCarousel = {
    template: pug,
    controller: ['appData', Controller]
  }

  export default testCarousel
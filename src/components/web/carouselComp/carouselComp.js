import pug from './carouselComp.pug'
import './carouselComp.scss'

function Controller() {}

function Link(scope, element, attr) {
  const ctrl = scope
  setTimeout(function () {
    const contentEl = element[0].querySelector('.content')
    ctrl.doted = ctrl.dot;
    ctrl.arrows = ctrl.arrow;
    ctrl.state = 0
    ctrl.children = []
    ctrl.children = contentEl.children
    ctrl.items = contentEl.children.length
    ctrl.limit = contentEl.children.length - 1
    ctrl.buttonClass = attr.buttonClass
  }, 100)

  ctrl.next = function () {
    if (ctrl.state < ctrl.limit) {
      ctrl.state = ctrl.state + 1
    }
  }

  ctrl.previous = function () {
    if (ctrl.state > 0) {
      ctrl.state = ctrl.state - 1
    }
  }
  ctrl.changeDot = (dot) => {
    ctrl.state = dot;
  }
}

const carouselComp = () => ({
  controller: Controller,
  controllerAs: 'carousel',
  link: Link,
  transclude: true,
  template: pug,
  scope: {
    arrow: '<',
    dot: '<'
  }
})

export default carouselComp

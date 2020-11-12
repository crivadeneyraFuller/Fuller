function Controller(openApp, qlik, appData) {
  const ctrl = this

  ctrl.$onInit = function () {
    ctrl.openApp = openApp[ctrl.app || appData.appName]
    setTimeout(function () {
      ctrl.openApp.getObject(ctrl.numObj + ctrl.objId, ctrl.objId, {
        noSelections: ctrl.options
      }).then(function () {

      })
    }, 100)
  }
  ctrl.$onChanges = function () {
    if (ctrl.openApp) {
      setTimeout(function () {
        ctrl.openApp.getObject(ctrl.numObj + ctrl.objId, ctrl.objId, {
          noSelections: ctrl.options
        }).then(function () {

        })
      }, 100)
    }
  }
}

const getObject = {
  template: "<div id=\"{{$ctrl.numObj + $ctrl.objId}}\" class=\"qvobject\" style=\"\" ng-style=\"{ 'height': $ctrl.height }\">Loading...</div>",
  controller: ['openApp', 'qlik', 'appData', Controller],
  bindings: {
    objId: '@',
    height: '@',
    app: '@',
    numObj: '@',
    options: '<'
  }
}

export default getObject

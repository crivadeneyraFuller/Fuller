function Controller(appData, openApp, $transclude, $scope, $rootScope, $element) {
  const ctrl = this;

  ctrl.$onInit = function() {
    ctrl.dataValue = 1;
    ctrl.openApp = openApp[ctrl.app || appData.appName];
    ctrl.varDato = true;
    ctrl.value = ctrl.defaultName;
    ctrl.openApp.createGenericObject(
      {
        var: {
          qStringExpression: `$(${ctrl.vName})`
        }
      },
      function(reply) {
        ctrl.qNum = parseInt(reply.var);
      }
    );

    $transclude($scope, function(transEl) {
      $element.append(transEl);
    });
  };

  ctrl.set = (val, name) => {
    ctrl.dataValue = val;
    console.log(ctrl.dataValue)
    ctrl.value = name;
    ctrl.openApp.variable.setNumValue(ctrl.vName, val);
  };
}

const qlikVariable = {
  controller: [ "appData", "openApp", "$transclude", "$scope", "$rootScope", "$element", Controller ],
  controllerAs: "variable",
  transclude: true,
  bindings: {
    vName: "@",
    default: "@",
    defaultName: "@"
  }
};

export default qlikVariable;

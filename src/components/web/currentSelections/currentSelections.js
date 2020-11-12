import pug from "./currentSelections.pug";

function Controller(appData, openApp, $scope) {
  const ctrl = this;

  ctrl.$onInit = function() {
    ctrl.currentApp = openApp[ctrl.app || appData.appName];
    $scope.selecciones = ctrl.currentApp.selectionState();
  };

  ctrl.clearSelections = function(data) {
    var lastNameField = ctrl.currentApp.field(data);
    lastNameField.clear();
  };

  ctrl.clearAll = () => ctrl.currentApp.clearAll();

}

const currentSelections = {
  template: pug,
  controller: ["appData", "openApp", "$scope", Controller],
  bindings:{
    app: '@',
    clearAll:'<'
  }
};

export default currentSelections;

function Controller(openApp, qlik, appData, $transclude, $scope, $element, $rootScope) {
  const ctrl = this
  ctrl.data = [];

  ctrl.$onInit = function () {
    ctrl.openApp = openApp[ctrl.app || appData.appName]
    // debugger
    ctrl.valueArray = []
    ctrl.miniCard = 1
    if (ctrl.parent) {
      ctrl.valueArray = JSON.parse(ctrl.parent)
    }
    setTimeout(function () {
      ctrl.openApp.getObject(ctrl.objId).then(function (obj) {
        obj.getHyperCubeData('/qHyperCubeDef', [{
          qTop: 0,
          qLeft: 0,
          qWidth: 15, // Number of columns
          qHeight: 200 // Number of rows
        }]).then(function (data) {
          ctrl.data = data[0].qMatrix[0];
          $transclude($scope, function (transEl) {
            $element.append(transEl)
          })
        });
      })
    }, 100)
    
 

    ctrl.selState = ctrl.openApp.selectionState()
    ctrl.selStateListener = function () {
      ctrl.data = {};
      ctrl.openApp.getObject(ctrl.objId).then(function (obj) {
        obj.getHyperCubeData('/qHyperCubeDef', [{
          qTop: 0,
          qLeft: 0,
          qWidth: 15, // Number of columns
          qHeight: 200 // Number of rows
        }]).then(function (data) {
          ctrl.data = data[0].qMatrix[0];
          // $transclude($scope, function (transEl) {
          //   $element.append(transEl)
          // })
        });
      })
    }
    ctrl.checkVariable();
  }

  ctrl.checkVariable = () => {
    ctrl.selState.OnData.bind(ctrl.selStateListener)
    // await ctrl.openApp.variable.setStringValue("vUnitMeasurement", "Tons");
    ctrl.openApp.createGenericObject({
        variable: {
          qStringExpression: "vUnitMeasurement"
        }
      },
      reply => {

        $scope.activeValueFilter = reply.variable;
        ctrl.openApp.destroySessionObject(reply.qInfo.qId);
      }
    );
  }

  $scope.changeVar = (variable, value) => {
    // TODO: Cuando se habiliten las secciones de "Margen" quitar el if.
    if ( value == 1 || value == 2 ) {
      ctrl.miniCard = value
      $rootScope.changeVar(variable, value)
      $rootScope.label = value;
      $rootScope.$broadcast('changeVar',{label:value})
    }
  }

  $scope.$on("updateTable", function (event, args) {
    ctrl.data = {};
    ctrl.openApp.getObject(ctrl.objId).then(function (obj) {
      obj.getHyperCubeData('/qHyperCubeDef', [{
        qTop: 0,
        qLeft: 0,
        qWidth: 15, // Number of columns
        qHeight: 200 // Number of rows
      }]).then(function (data) {
        ctrl.data = data[0].qMatrix[0];
        // $transclude($scope, function (transEl) {
        //   $element.append(transEl)
        // })
      });
    })

    ctrl.checkVariable();
  });

  ctrl.$onChanges = function () {
    if (ctrl.openApp) {
      setTimeout(function () {
        ctrl.openApp.getObject(ctrl.objId).then(function (obj) {
          obj.getHyperCubeData('/qHyperCubeDef', [{
            qTop: 0,
            qLeft: 0,
            qWidth: 15, // Number of columns
            qHeight: 200 // Number of rows
          }]).then(function (data) {
            ctrl.data = data[0].qMatrix[0];
            $transclude($scope, function (transEl) {
              $element.append(transEl)
            })
          });
        })
      }, 100)
    }
  }
  
}

const getObject = {
  controller: ['openApp', 'qlik', 'appData', '$transclude', '$scope', '$element', '$rootScope', Controller],
  controllerAs: 'reply',
  transclude: true,
  bindings: {
    objId: '@',
    app: '@',
    parent: '@'
  }
}

export default getObject

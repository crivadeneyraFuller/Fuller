function Controller(openApp, $transclude, $scope, $element, $filter) {
  const ctrl = this

  ctrl.getVisualization = function () {
    ctrl.openApp.visualization.get(ctrl.objId).then(function (vis) {
      ctrl.totals = vis.table.totals

      if (ctrl.debug) {
        console.log("debug", vis)
      }
      if (ctrl.format) {
        ctrl.numberFormatter(ctrl.totals[0].qNum, 2, function (data) {
          ctrl.result = data;
        });
      } else {
        ctrl.result = ctrl.totals[0].qText
      }
      //kpi.result
    })
  }
  ctrl.$onInit = function () {
    ctrl.openApp = openApp[ctrl.app || appData.appName]
    ctrl.getVisualization()

    ctrl.selState = ctrl.openApp.selectionState()
    ctrl.selStateListener = function () {
      ctrl.getVisualization()
    }
    ctrl.selState.OnData.bind(ctrl.selStateListener)

    $transclude($scope, function (transEl) {
      $element.append(transEl)
    })
  }


  /*funcion para darle formato a los numeros  */

  ctrl.numberFormatter = function (num, digits, ret) {
    if (num == undefined)
      return 0;
    var negativo = false;
    if (num < 0) {
      negativo = true;
      num = num * (-1);
    } else if (isNaN(num)) {
      return 0;
    }
    var si = [{
      value: 1,
      symbol: ""
    },
    {
      value: 1E3,
      symbol: "K"
    },
    {
      value: 1E6,
      symbol: "M"
    },
    {
      value: 1E9,
      symbol: "G"
    },
    {
      value: 1E12,
      symbol: "T"
    }

    ];
    var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var i;
    for (i = si.length - 1; i > 0; i--) {
      if (num >= si[i].value) {
        break;
      }
    }
    num = negativo ? (num * -1) / si[i].value : num / si[i].value;
    num = num.toFixed(digits).replace(rx, "$1");

    if (ctrl.currency) {
      ret($filter('currency')(num));
    } else {
      ret(num);
    }
  }

}

const getObjectData = {
  controller: ['openApp', '$transclude', '$scope', '$element', '$filter', Controller],
  controllerAs: 'kpi',
  transclude: true,
  bindings: {
    objId: '@',
    app: '@',
    debug: '<',
    format: '<',
    currency: '<'
  }
}

export default getObjectData

import pug from "./filtersComp.pug";

function Controller(appData, $scope, openApp) {
  const ctrl = this;
  ctrl.item = {};
  ctrl.item.selected = ctrl.default;

  ctrl.$onInit = function () {
    ctrl.openApp = openApp[ctrl.app || appData.appName];
    ctrl.list = ctrl.openApp.field(ctrl.dimension).getData().rows;
    if (ctrl.newOption) {
      ctrl.item.selected = ctrl.titleOption
    }
  };

  ctrl.showList = () => {
    ctrl.dropdownlist = !ctrl.dropdownlist;

    if (ctrl.dropdownlist) {
      window.addEventListener('click', ctrl.onWindowClick)
    } else {
      window.removeEventListener('click', ctrl.onWindowClick)
    }
  };

  ctrl.select = (item, dimension, index) => {
    if (angular.isDefined(item)) {
      if (ctrl.native) {
        if (ctrl.newOption && item == ctrl.titleOption) {
          ctrl.openApp.field(dimension).clear().then( function (data) {
          })
        } else {
          ctrl.openApp.field(dimension).selectMatch(item, false, false).then( function (data) {
          })
        }
      } else {
        ctrl.openApp.field(dimension).selectMatch(item.qText, false, false).then( function (data) {
        })
      }
    }
  };

  // Verifica cual filtro esta activo y los cierra y abre el actual
  ctrl.onWindowClick = function (evt) {
    let arrayFilters = document.querySelectorAll('.filter__buttom')
    for (let el of arrayFilters) {
      if (el.textContent == evt.target.textContent && ctrl.name != evt.target.textContent) {
        $scope.$apply(function () {
          ctrl.dropdownIsOpen = false
        })
      }
    }
  }

  $scope.$on("dropDownFalse", function (event, args) {
    ctrl.dropdownlist = false;
  });

  $scope.$on("ChangeSelectHeader", function (event, args) {
    if ( args.nameDimension == ctrl.dimension ) {
      ctrl.item.selected = 'Global'
    }
  });
}

const filtersComp = {
  template: pug,
  controller: ["appData", "$scope", "openApp", Controller],
  bindings: {
    app: "@",
    default: '@',
    dimension: "@",
    sorting: "@",
    name: "@",
    newOption: '<',
    titleOption: '@',
    native: "<"
  }
};

export default filtersComp;

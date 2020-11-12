import html from './getTable.pug'

function Controller(openApp, appData,$scope) {
  const ctrl = this
  ctrl.data;
  ctrl.header = [];

  ctrl.getTableData = (id) => {
    ctrl.load=true;
    ctrl.openApp.getObject(id).then(obj => {
      var response = [];
      obj.layout.qHyperCube.qDimensionInfo.forEach(element => {
        ctrl.header.push(element.qFallbackTitle);
      });
      obj.layout.qHyperCube.qMeasureInfo.forEach(element => {
        ctrl.header.push(element.qFallbackTitle);
      });
      // var titulos = [{ qText: "Total", qNum: 0, qElemNumber: -1, qState: "X", qIsTotalCell: true }];
      // titulos = titulos.concat(obj.layout.qHyperCube.qGrandTotalRow)
      // response[0] = titulos;
      var getFullCube = function (page) {
        obj.getHyperCubeData("/qHyperCubeDef", [{
          qTop: (100 * page),
          qLeft: 0,
          qWidth: 50, // Number of columns
          qHeight: 100 // Number of rows
        }])
          .then(function (dataPages) {
            if (dataPages["0"].qArea.qHeight === 0) {
              dataPages["0"].qMatrix = dataPages["0"].qMatrix.concat(response);
              ctrl.data = dataPages;
              ctrl.load=false;
              // return 0;
            } else {
              page++;
              response = response.concat(dataPages["0"].qMatrix);
              getFullCube(page);
              // return 0;
            }
          });
      };
      getFullCube(0);
    });

  }
  ctrl.$onInit = function () {
    ctrl.openApp = openApp[ctrl.app || appData.appName]
    ctrl.getTableData(ctrl.objId);
  }
  // ctrl.$onChanges = function () {
  //   ctrl.getTableData(ctrl.objId);
  // }
}

const getObject = {
  template: html,
  controller: ['openApp', 'appData','$scope', Controller],
  controllerAs: 'table',
  bindings: {
    objId: '@',
    app: '@',
    title: '@'
  }
}

export default getObject

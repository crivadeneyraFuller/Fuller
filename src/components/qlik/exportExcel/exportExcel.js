import pug from "./exportExcel.pug";

function Controller(appData) {
  const ctrl = this;

  ctrl.$onInit = function() {
    ctrl.openApp = openApp[ctrl.app || appData.appName];
  };

  $scope.exportData = (id) => {
    ctrl.descargado = true;
    ctrl.openApp.getObject(null, id).then(function(vizModel) {
      vizModel.exportData().then(function(reply) {
        var link = document.createElement("a");
        link.href = reply.qUrl;
        link.download = reply.qUrl.substr(reply.qUrl.lastIndexOf("/") + 1);
        link.click();
        link.remove();
        ctrl.descargado = false;
      });
    });
  };

}

const exportExcel = {
  template: pug,
  controller: ["appData", Controller],
  bindings: {
    idObj:'@',
    image: '<',
    title: '@'
  }
};

export default exportExcel;

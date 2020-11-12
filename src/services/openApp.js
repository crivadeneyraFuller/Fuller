/**
 * Open Mashup
 * @author Eduardo González
 * @param {Object} qlik -
 * @param {Object} appData -
 * @return {Object} -
 */
function Service(qlik, appData) {
  let config = {
    host: window.location.hostname,
    prefix: "/",
    port: window.location.port,
    isSecure: window.location.protocol === "https:"
  }

  let app = [];
  let keys = Object.keys(appData.apps.local);
  app = keys;
  let switchApp = app => window.location.port === "4848" ? appData.apps.local[app] : appData.apps.servidor[app]
  let apps = {};
  app.forEach((element, index) => {
    apps[element] = qlik.openApp(switchApp(element), config);
  });

  return apps
}

const openApp = ['qlik', 'appData', Service]

export default openApp

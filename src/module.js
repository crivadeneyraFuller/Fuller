import appConfig from './routes'
import openApp from './services/openApp'
import evalDevice from './services/evalDevice'
import appRoot from './components/appRoot'
import getObject from './components/qlik/getObject/getObject'
import getKpi from './components/qlik/getKpi/getKpi'
import getTable from './components/qlik/getTable/getTable'
import exportExcel from './components/qlik/exportExcel/exportExcel'
import deltaColor from './components/qlik/deltaColor'
import qlikVariable from './components/qlik/qlikVariable/qlikVariable'
import filtersComp from './components/qlik/filtersComp/filtersComp'
import currentSelections from './components/web/currentSelections/currentSelections'
import dropdown from './components/web/dropdown/dropdown';
import carouselComp from './components/web/carouselComp/carouselComp';
import testCarousel from './components/web/carouselComp/carouselComp'
import dashboardComp from './components/web/dashboardComp/dashboardComp'
import fuerzaventasComp from './components/web/fuerzaventasComp/fuerzaventasComp'
import pycComp from './components/web/pycComp/pycComp'
import movimientosbancariosComp from './components/web/movimientosBancariosComp/movimientosBancariosComp'
import reportedinamicoComp from './components/web/reporteDinamicoComp/reportedinamicoComp'
import otrosreportesseleccionComp from './components/web/otrosreportesseleccionComp/otrosreportesseleccionComp'
import otrosreportesComp from './components/web/otrosreportesComp/otrosreportesComp'
import headerComp from './components/web/headerComp/headerComp'
import headerreportesComp from './components/web/headerreportesComp/headerreportesComp'
import getTableKpis from './components/qlik/getTableKpis/getTableKpis'

const appModule = (qlik, responseJson) => (
  angular.module('app', ['ngRoute'])
  .config(appConfig)
  .service('qlik', () => qlik)
  .service('appData', () => responseJson)
  .service('openApp', openApp)
  .service('evalDevice', evalDevice)
  .component('appRoot', appRoot)
  .component('getObject', getObject)
  .component('getKpi', getKpi)
  .component('getTable', getTable)
  .component('exportExcel', exportExcel)
  .component('filtersComp', filtersComp)
  .component('qlikVariable', qlikVariable)
  .component('currentSelections', currentSelections)
  .component('dropdown', dropdown)
  .component('testCarousel', testCarousel)
  .component('dashboardComp', dashboardComp)
  .component('fuerzaventasComp', fuerzaventasComp)
  .component('pycComp', pycComp)
  .component('movimientosbancariosComp', movimientosbancariosComp)
  .component('reportedinamicoComp', reportedinamicoComp)
  .component('otrosreportesseleccionComp', otrosreportesseleccionComp)
  .component('otrosreportesComp', otrosreportesComp)
  .component('headerComp', headerComp)
  .component('headerreportesComp', headerreportesComp)
  .component('getTableKpis', getTableKpis)
  .directive('deltaColor', deltaColor)
  .directive('carouselComp', carouselComp)
)

export default appModule

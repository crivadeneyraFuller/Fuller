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
import catalogodirectorasComp from './components/web/catalogoDirectorasComp/catalogoDirectorasComp'
import catalogogerentesComp from './components/web/catalogoGerentesComp/catalogoGerentesComp'
import catalogocoordinadoresComp from './components/web/catalogoCoordinadoresComp/catalogoCoordinadoresComp'
import fullerettesactivaszonasComp from './components/web/fullerettesActivasZonasComp/fullerettesActivasZonasComp'
import fullerettesbajasComp from './components/web/fullerettesBajasComp/fullerettesBajasComp'
import planeacionventasComp from './components/web/planeacionVentasComp/planeacionVentasComp'
import planeacionventasdistritoComp from './components/web/planeacionVentasDistritoComp/planeacionVentasDistritoComp'
import detallecontratoscampanaComp from './components/web/detalleContratosCampanaComp/detalleContratosCampanaComp'
import prestigeComp from './components/web/prestigeComp/prestigeComp'
import puntoquiebreComp from './components/web/puntoQuiebreComp/puntoQuiebreComp'
import valesgasolinaComp from './components/web/valesGasolinaComp/valesGasolinaComp'
import stellargerentesComp from './components/web/stellarGerentesComp/stellasGerentesComp'
import stellardirectorasComp from './components/web/stellarDirectorasComp/stellasDierctorasComp'
import bonoscaminoexitoComp from './components/web/bonosCaminoExitoComp/bonosCaminoExitoComp'
import indicadoresdistritoComp from './components/web/indicadoresDistritoComp/indicadoresDistritoComp'
import indicadoresdivisionComp from './components/web/indicadoresDivisionComp/indicadoresDivisionComp'
import indicadoreszonasComp from './components/web/indicadoresZonasComp/indicadoresZonasComp'
import seguimientocontratosComp from './components/web/seguimientoContratosComp/seguimientoContratosComp'
import seguimientospagosComp from './components/web/seguimientosPagosComp/seguimientosPagosComp'

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
  .component('catalogodirectorasComp', catalogodirectorasComp)
  .component('catalogogerentesComp', catalogogerentesComp)
  .component('catalogocoordinadoresComp', catalogocoordinadoresComp)
  .component('fullerettesactivaszonasComp', fullerettesactivaszonasComp)
  .component('fullerettesbajasComp', fullerettesbajasComp)
  .component('planeacionventasComp', planeacionventasComp)
  .component('planeacionventasdistritoComp', planeacionventasdistritoComp)
  .component('detallecontratoscampanaComp', detallecontratoscampanaComp)
  .component('prestigeComp', prestigeComp)
  .component('puntoquiebreComp', puntoquiebreComp)
  .component('valesgasolinaComp', valesgasolinaComp)
  .component('stellargerentesComp', stellargerentesComp)
  .component('stellardirectorasComp', stellardirectorasComp)
  .component('bonoscaminoexitoComp', bonoscaminoexitoComp)
  .component('indicadoresdistritoComp', indicadoresdistritoComp)
  .component('indicadoresdivisionComp', indicadoresdivisionComp)
  .component('indicadoreszonasComp', indicadoreszonasComp)
  .component('seguimientocontratosComp', seguimientocontratosComp)
  .component('seguimientospagosComp', seguimientospagosComp)
  .directive('deltaColor', deltaColor)
  .directive('carouselComp', carouselComp)
)

export default appModule

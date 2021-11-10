import pug from './headerComp.pug'

  function Controller(appData, qlik) {
    const ctrl = this

    ctrl.$onInit = function() {
      ctrl.mobile = ($(window).width() < 767) ? true : false // Mobile desktop toggle
      ctrl.ventana = window.location.hash
      ctrl.modalFiltro = false
      ctrl.region = appData.Filtros.General.dimension.Region
      ctrl.division = appData.Filtros.General.dimension.Division
      ctrl.distrito = appData.Filtros.General.dimension.Distrito
      ctrl.zona = appData.Filtros.General.dimension.Zona
      ctrl.bloque = appData.Filtros.General.dimension.Bloque
      ctrl.campana = appData.Filtros.General.dimension['Campaña']
      ctrl.anio = appData.Filtros.General.dimension['Año']
      ctrl.movAnio = appData.FiltrosMovimientos.General.dimension['Año']
      ctrl.movMes = appData.FiltrosMovimientos.General.dimension.Mes
      ctrl.movDia = appData.FiltrosMovimientos.General.dimension.Dia
      ctrl.movFecha = appData.FiltrosMovimientos.General.dimension.Fecha
    }
    ctrl.showFilter = () => {
      ctrl.modalFiltro = !ctrl.modalFiltro
      setTimeout(() => {
        qlik.resize();
      },1500)
    }


  }

  const headerComp = {
    template: pug,
    controller: ['appData', 'qlik', Controller]
  }

  export default headerComp

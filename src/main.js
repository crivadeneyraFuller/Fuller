import requirejs from 'requirejs'
import appModule from './module'
import './libs/pollyfils/find';
import 'bootstrap';
import 'jquery';
import 'popper.js'
import './scss/main.scss'

const config = {
  host: window.location.hostname,
  prefix: "/",
  port: window.location.port,
  isSecure: window.location.protocol === "https:"
}

const baseUrl = {
  protocol: config.isSecure ? "https://" : "http://",
  host: config.host,
  port: config.port ? `:${config.port}` : "",
  prefix: config.prefix
}

requirejs.config({
  baseUrl: `${baseUrl.protocol}${baseUrl.host}${baseUrl.port}${baseUrl.prefix}resources`
})

requirejs(['js/qlik', 'jquery'], function (qlik, $) {
  $.get('config.json', function (response) {
    appModule(qlik, response)
    angular.element(document).ready(function () {
      angular.bootstrap(document, ['app', 'qlik-angular'])
    })
  })
})

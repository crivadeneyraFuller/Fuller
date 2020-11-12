const {
  src,
  dest,
  parallel
} = require('gulp')
const file = require('gulp-file')
const gutil = require('gulp-util')

const name = gutil.env.comp
const urlDist = gutil.env.path ? `./src/components/${gutil.env.path}${name}` : `./src/components/${name}`
const templates = {
  js: `
  import pug from './${name}.pug'

  function Controller(appData) {
    const ctrl = this

    ctrl.$onInit = function() {}
  }

  const ${name} = {
    template: pug,
    controller: ['appData', Controller]
  }

  export default ${name}`,
  pug: `h1 Hola ${name}`
}

const pugTemplate = () => file(`${name}.pug`, templates.pug, {
  src: true
}).pipe(dest(urlDist))

const jsTemplate = () => file(`${name}.js`, templates.js, {
  src: true
}).pipe(dest(urlDist))

exports.pugTemplate = pugTemplate
exports.jsTemplate = jsTemplate
exports.create = parallel(pugTemplate, jsTemplate)

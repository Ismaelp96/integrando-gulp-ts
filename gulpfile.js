const { series, parallel, src, dest } = require('gulp')
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const tsify = require('tsify')
var ts = require('gulp-typescript')

function limparDist(cb) {
  cb()
}

function copiarHTML(cb) {
  cb()
}

function gerarJS(cb) {
  cb()
}

exports.default = series(limparDist, parallel(gerarJS, copiarHTML))

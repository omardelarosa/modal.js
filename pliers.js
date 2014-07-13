module.exports = tasks

var fs = require('fs')
  , Handlebars = require('handlebars')

function tasks(pliers) {

  pliers('build', function (done) {

    pliers.exec('./node_modules/.bin/handlebars ./modal-template.hbs -f ./modal-template.js -c handlebars', done)

  })

}
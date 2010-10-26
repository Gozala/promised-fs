'use strict'

var path = require('path')
,   fs = require('fs')

exports._exisits = path.exists
exports._isFile = function(path, callback) {
  fs.stat(path, function(e, stats) {
    if (e) return callback(e)
    console.log(stats)
    callback(e, stats.isFile())
  })
}

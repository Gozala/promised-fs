'use strict'

var paths = require('path')
,   fs = require('fs')

exports._exists = function _exists(path, callback) {
  paths.exists(path, function(exists) {
    return callback(null, exists)
  })
}
exports._isFile = function(path, callback) {
  fs.stat(path, function(e, stats) {
    if (e) return callback(e)
    callback(e, stats.isFile())
  })
}

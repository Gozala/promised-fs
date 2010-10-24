'use strict'

var fs = require('fs')

exports._read = fs.readFile
exports._write = fs.writeFile
exports._touch = function() {}
exports._remove = fs.unlink

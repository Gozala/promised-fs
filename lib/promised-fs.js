'use strict'

var FSTrait = require('filesystem-composer').FSTrait
,   listing = require('./listing')
,   files = require('./files')
,   paths = require('./paths')
,   directories = require('./directories')
,   permissions = require('./permissions')
,   tests = require('./tests')

module.exports = FSTrait.create(
{ _list: listing._list

, _umask: permissions._umask

, _exists: tests._exists
, _isFile: tests._isFile

, _separator: paths._separator
, workingDirectory: paths.workingDirectory
, changeWorkingDirectory: paths.changeWorkingDirectory

, _removeDirectory: directories._removeDirectory
, _makeDirectory: directories._makeDirectory

, _read: files._read
, _write: files._write
, _remove: files._remove
, _touch: files._touch
})

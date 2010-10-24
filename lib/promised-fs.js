'use strict'

var FSTrait = require('filesystem-composer').FSTrait
,   list = require('./list')
,   file = require('./file')
,   path = require('./path')

module.exports = FSTrait.create(
{ _list: list._list

, _separator: path._separator
, workingDirectory: path.workingDirectory
, changeWorkingDirectory: path.changeWorkingDirectory

, _read: file._read
, _write: file._write
, _remove: file._remove
, _touch: file._touch
})

'use strict'
var fs = require('promised-fs')
,   when = require('q').when
,   fixturesDir = require('./fixtures').fixturesDir

exports['test read non exsisting file'] = function(assert, done) {
  var path = fs.join(fixturesDir, 'does_not_exist.txt')
  var content = fs.read(path, 'raw')
  when
  ( content
  , function(content) {
      assert.fail('read data for non existing file: ' + content)
      done()
    }
  , function(reason) {
      assert.pass('could not read data for non existing file')
      done()
    }
  )
}

if (module == require.main) require('test').run(exports)

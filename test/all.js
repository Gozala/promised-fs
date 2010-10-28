'use strict'

exports['test listing'] = require('./list')
exports['test working directory'] = require('./working-directory')
exports['test read'] = require('./read')

if (module == require.main) require('test').run(exports)

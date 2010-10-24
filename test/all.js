'use strict'

exports['test listing'] = require('./list')

if (module == require.main) require('test').run(exports)

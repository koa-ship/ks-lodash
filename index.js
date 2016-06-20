'use strict';

let lodash = require('lodash');
const utility = require('utility');
const validator = require('validator');
const common = require('./lib/common');

// custom utils
lodash.mixin(common);

// third parts utils
lodash.safeMixin(utility);
lodash.safeMixin(validator);

// useful tools
lodash['moment'] = require('moment');
lodash['request'] = require('request');
lodash['sanitize'] = require('sanitize-html');
lodash['requireAll'] = require('./lib/require-all');
lodash['async'] = require('async');
lodash['sync'] = require('deasync');

module.exports = lodash;
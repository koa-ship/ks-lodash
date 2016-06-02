'use strict';

const utility = require('utility');
const validator = require('validator');
const moment = require('moment');
const request = require('request');
const sanitize = require('sanitize-html');
const common = require('./lib/common');
const requireAll = require('./lib/require-all');

var lodash = require('lodash');

// custom utils
lodash.mixin(common);

// third parts utils
lodash.safeMixin(utility);
lodash.safeMixin(validator);

lodash.safeMixin({
  moment: moment,
  request: request,
  sanitize: sanitize,
  requireAll: requireAll
});

module.exports = lodash;
'use strict';

const utility = require('utility');
const validator = require('validator');
const moment = require('moment');
const request = require('request');
const sanitize = require('sanitize-html');
const common = require('./lib/common');
const requireAll = require('./lib/require-all');

var utils = require('lodash');

// custom utils
utils.mixin(common);

// third parts utils
utils.safeMixin(utility);
utils.safeMixin(validator);

utils.safeMixin({
  moment: moment,
  request: request,
  sanitize: sanitize,
  requireAll: requireAll
});

module.exports = utils;
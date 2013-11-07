/**
 * Core dependencies.
 */

var join = require('path').join;

/**
 * External dependencies.
 */

var chai = require('chai');

/**
 * Internal dependencies.
 */

global.fine = require('../..');

/**
 * Register `should`.
 */

global.should = chai.should();

/**
 * Include stack traces.
 */

chai.Assertion.includeStack = true;

/**
 * Return path to a fixture.
 *
 * @returns {String}
 * @api public
 */

global.fixt = function(extra) {
  return join(__dirname, '..', 'fixtures', extra);
};

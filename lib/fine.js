/**
 * Core dependencies.
 */

var fs = require('fs');
var path = require('path');

/**
 * Find all files in given `location`.
 *
 * Features:
 *
 * - Recursive
 * - Sync
 * - Ignore list
 *
 * Options:
 *
 * - ext     Extension
 * - ignore  Patterns to ignore
 *
 * @param {String} path
 * @param {Object} options
 * @returns {Array}
 * @api public
 */

function fine(location, options) {
  options = options || {};
  location = path.normalize(location);

  var files = [];
  var ext = options.ext;
  var dir = isDirectory(location) ? fs.readdirSync(location) : [''];
  var ignore = options.ignore || [];

  if (!Array.isArray(ignore)) {
    ignore = [ignore];
  }

  dir.forEach(function(file) {
    var full = path.join(location, file);

    if (isDirectory(location) === true) {
      files = files.concat(fine(full, options));
      return;
    }

    if (ext && path.extname(full) != ext) {
      return;
    }

    for (var i = 0, len = ignore.length; i < len; i++) {
      if (new RegExp('^' + ignore[i]).test(full)) return;
    }

    files.push(full);
  });

  return files;
}

/**
 * Check if `path` is a directory.
 *
 * @param {String} path
 * @returns {Boolean}
 * @api private
 */

function isDirectory(path) {
  return fs.statSync(path).isDirectory();
}

/**
 * Primary export.
 */

module.exports = fine;

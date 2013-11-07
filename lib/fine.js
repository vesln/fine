/**
 * Core dependencies.
 */

var fs = require('fs');
var path = require('path');

/**
 * Is it running on Windows.
 */

var win = process.platform === 'win32';

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

  var files = [];
  var ext = options.ext;
  var dir = isDirectory(location) ? fs.readdirSync(location) : [''];
  var ignore = options.ignore || [];

  if (!Array.isArray(ignore)) {
    ignore = [ignore];
  }

  dir.forEach(function(file) {
    var full = path.join(location, file);
    if (win) full = full.replace(/\\/g, "/");

    if (isDirectory(full) === true) {
      files = files.concat(fine(full, options));
      return;
    }

    if (ext && path.extname(full) != ext) {
      return;
    }

    for (var i = 0, len = ignore.length; i < len; i++) {
      var pattern = win ? ignore[i].replace(/\\/g, '/') : ignore[i];
      var regex = new RegExp('^' + pattern);
      if (regex.test(full)) return;
    }

    files.push(path.normalize(full));
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

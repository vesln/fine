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
 * - ext     Extension(s)
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
  var dir = isDirectory(location) ? fs.readdirSync(location) : [''];
  var ignore = options.ignore || [];
  var exts = options.ext;

  if (!exts) exts = [];
  if (!Array.isArray(exts)) exts = [exts];

  if (!Array.isArray(ignore)) ignore = [ignore];

  dir.forEach(function(file) {
    var full = path.join(location, file);
    if (win) full = full.replace(/\\/g, "/");

    if (isDirectory(full) === true) {
      files = files.concat(fine(full, options));
      return;
    }

    if (exts.length && !hasExtension(full, exts)) {
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
 * Verify if `file` has any of the given `exts`.
 *
 * @param {String} file
 * @param {Array} extensions
 * @returns {Boolean}
 * @api public
 */

function hasExtension(file, exts) {
  var fileExt = path.extname(file);

  return exts.filter(function(ext) {
    return fileExt === ext;
  }).length > 0;
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

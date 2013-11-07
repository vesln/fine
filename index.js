module.exports = process.env.FINE_COV
  ? require('./lib-cov/fine')
  : require('./lib/fine');

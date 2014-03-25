var path = require('path');
var findr = require('..');
var fixtures = path.join(__dirname, 'fixtures');

describe('fine', function() {
  it('returns an error when the supplied path is not a directory', function() {
    should.throw(function() {
      findr('/truly/invalid/path/');
    }, /^ENOENT, no such file or directory/);
  });

  it('can handle situations where the path is a file', function() {
    findr(fixture('a.js')).should.eql([
      fixture('a.js')
    ]);
  });

  it('returns all files in a directory tree', function() {
    findr(fixtures).should.eql([
      fixture('2/3/c.js'),
      fixture('2/3/d.foo.js'),
      fixture('2/b.js'),
      fixture('a.js'),
      fixture('e.coffee'),
    ]);
  });

  it('can return files with given extension', function() {
    findr(fixtures, { ext: '.coffee' }).should.eql([
      fixture('e.coffee'),
    ]);
  });

  it('can return files with given extensions', function() {
    findr(fixtures, { ext: ['.coffee', '.js'] }).should.eql([
      fixture('2/3/c.js'),
      fixture('2/3/d.foo.js'),
      fixture('2/b.js'),
      fixture('a.js'),
      fixture('e.coffee'),
    ]);
  });

  it('can ignore files', function() {
    findr(fixtures, { ignore: fixture('e.coffee') }).should.eql([
      fixture('2/3/c.js'),
      fixture('2/3/d.foo.js'),
      fixture('2/b.js'),
      fixture('a.js'),
    ]);
  });

  it('can ignore directories', function() {
    findr(fixtures, { ignore: fixture('2') }).should.eql([
      fixture('a.js'),
      fixture('e.coffee')
    ]);
  });

  it('can ignore many locations atonce', function() {
    findr(fixtures, { ignore: [fixture('2'), fixture('e.coffee')] }).should.eql([
      fixture('a.js')
    ]);
  });
});

function fixture(p) {
  return path.join(fixtures, p);
}

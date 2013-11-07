var findr = require('..');
var fixtures = __dirname + '/fixtures/';

describe('fine', function() {
  it('returns an error when the supplied path is not a directory', function() {
    should.throw(function() {
      findr('/truly/invalid/path/');
    }, /^ENOENT, no such file or directory/);
  });

  it('can handle situations where the path is a file', function() {
    findr(fixtures + 'a.js').should.eql([
      fixtures + 'a.js'
    ]);
  });

  it('returns all files in a directory tree', function() {
    findr(fixtures).should.eql([
      fixtures + '2/3/c.js',
      fixtures + '2/3/d.foo.js',
      fixtures + '2/b.js',
      fixtures + 'a.js',
      fixtures + 'e.coffee',
    ]);
  });

  it('can return files with given extension', function() {
    findr(fixtures, { ext: '.coffee' }).should.eql([
      fixtures + 'e.coffee',
    ]);
  });

  it('can ignore files', function() {
    findr(fixtures, { ignore: fixtures + 'e.coffee' }).should.eql([
      fixtures + '2/3/c.js',
      fixtures + '2/3/d.foo.js',
      fixtures + '2/b.js',
      fixtures + 'a.js',
    ]);
  });

  it('can ignore directories', function() {
    findr(fixtures, { ignore: fixtures + '2/' }).should.eql([
      fixtures + 'a.js',
      fixtures + 'e.coffee',
    ]);
  });

  it('can ignore many locations atonce', function() {
    findr(fixtures, { ignore: [fixtures + '2/', fixtures + 'e.coffee'] }).should.eql([
      fixtures + 'a.js',
    ]);
  });
});

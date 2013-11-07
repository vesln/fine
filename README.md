[![NPM version](https://badge.fury.io/js/fine.png)](http://badge.fury.io/js/fine)
[![Build Status](https://secure.travis-ci.org/vesln/fine.png)](http://travis-ci.org/vesln/fine)
[![Coverage Status](https://coveralls.io/repos/vesln/fine/badge.png?branch=master)](https://coveralls.io/r/vesln/fine?branch=master)
[![Code Climate](https://codeclimate.com/github/vesln/fine.png)](https://codeclimate.com/github/vesln/fine)

# Fine

## Synopsis

Simple, recursive and synchronous file finder utility.

The module is very tiny and not very well generalized. However, that's the
exact functionality that I needed in:

- [curiosity](https://github.com/vesln/curiosity)
- [stylec](https://github.com/vesln/stylec)
- [hell](https://github.com/vesln/hell)

For more complete solution see:

- [shelljs](https://github.com/arturadib/shelljs)

## Usage

```js
var fine = require('fine');

var files = fine('/tmp');
```

#### Return files with given extension

```js
fine('/tmp', { ext: '.js' });
```

#### Ignore list

```js
fine('/tmp/', { ignore: '/tmp/secret' });
```

```js
fine('/tmp/', { ignore: ['/tmp/secret', '/tmp/fbi.js', '/tmp/bad.js'] });
```

## Installation

```bash
$ npm install fine
```

## Tests

### Running the tests

```bash
$ npm install
$ make test
```

### Test coverage

```bash
$ make test-cov
```

### JSHint

```bash
$ make jshint
```

## Support the author

Do you like this project? Star the repository, spread the word - it really helps. You may want to follow
me on [Twitter](https://twitter.com/vesln) and
[GitHub](https://github.com/vesln). Thanks!

## License

**MIT License**

Copyright (C) 2013 Veselin Todorov (hi@vesln.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial
portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[![NPM version](https://badge.fury.io/js/fine.png)](http://badge.fury.io/js/fine)
[![Build Status](https://secure.travis-ci.org/vesln/fine.png)](http://travis-ci.org/vesln/fine)
[![Coverage Status](https://coveralls.io/repos/vesln/fine/badge.png?branch=master)](https://coveralls.io/r/vesln/fine?branch=master)
[![Code Climate](https://codeclimate.com/github/vesln/fine.png)](https://codeclimate.com/github/vesln/fine)

# Important Notice

I'm no longer actively maintaining this project. If you are interested supporting it - [ping me on twitter](https://twitter.com/vesln).
The only thing that I will ask you is to not change the API drastically. If you are planning on doing that - better start a brand new project.

If you want me to transfer you only the name on npm, I'd be happy to only if the project **does not have any downloads on npm lately**. In case it's being
downloaded, there are people that depend on it and might step up and start maintaining, so I will not transfer it to you, regardless if you want to release
a new major version etc.

If you have any other questions, let me know.

Thanks!

Veselin

# Fine

## Synopsis

Tiny, recursive and synchronous file finder utility.

## Features

- Recursive file finder
- Filter by extension
- Ignore list
- Synchronous
- Windows support

## Description

The module is optimized for finding specific files in a given directory tree.
I needed something that could allow me to easily accomplish the following:

```
$ ./bin/awesome ~/Code/npm/ --ignore ~/Code/npm/test --ignore ~/Code/npm/examples
```

In this particular case we are interested in all .js files in the npm
directory tree, but not in test, nor in examples.

## Usage

```js
var fine = require('fine');
var files = fine('/tmp');
```

#### Return files with given extension(s)

```js
fine('/tmp', { ext: '.js' });
```

```js
fine('/tmp', { ext: ['.js', '.coffee'] });
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

## Similar projects

- [node-glob](https://github.com/isaacs/node-glob)
- [shelljs](https://github.com/arturadib/shelljs)

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

# buz

[![license][license-img]][github] [![github][github-img]][github] [![npm][npm-img]][npm]  

List JavaScript file sizes - babeled, uglified and zipped (gzip).

## Usage

buz is most useful when installed globally.
```
> npm install -g buz
```

Use it with a single file path as argument.
```
> buz some-file.js

buzzing '/path/to/some-file.js' ...
 src  1637
 es5  1929
 min  1149
 zip   636
```

```
> buz --help

Usage: buz [OPTIONS] FILE

Options:
  -h, --help:  show this help message
  -s, --show:  show es5 and minified code

Arguments:
  FILE:        a single input file path
```


## License
The MIT License (MIT)

Copyright (c) 2024 Lars Jung (https://larsjung.de)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


[github]: https://github.com/lrsjng/buz
[npm]: https://www.npmjs.org/package/buz

[license-img]: https://img.shields.io/badge/license-MIT-a0a060.svg?style=flat-square
[github-img]: https://img.shields.io/badge/github-lrsjng/buz-a0a060.svg?style=flat-square
[npm-img]: https://img.shields.io/badge/npm-buz-a0a060.svg?style=flat-square

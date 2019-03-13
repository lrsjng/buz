const babel = require('babel-core');
const uglify = require('uglify-js');
const zlib = require('zlib');

const babel_opts = {presets: [require('babel-preset-env')]};

const buz = src => {
    const es5 = babel.transform(src, babel_opts).code;
    const min = uglify.minify(es5).code;
    const zip = zlib.gzipSync(min);
    return {src, es5, min, zip};
};

module.exports = buz;

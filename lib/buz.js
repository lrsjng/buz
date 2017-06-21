const babel = require('babel-core');
const uglify = require('uglify-js');
const zlib = require('zlib');

const babel_opts = {presets: [require('babel-preset-es2015')]};

const buz = content => {
    const res = {
        src: content
    };

    res.es5 = babel.transform(content, babel_opts).code;
    res.min = uglify.minify(res.es5).code;
    res.zip = zlib.gzipSync(res.min);

    return res;
};

module.exports = buz;

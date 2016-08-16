const babel_lib = require('babel-core');
const uglify_lib = require('uglify-js');
const zlib = require('zlib');

const babel = (content, opts = {presets: 'es2015'}) => {
    return babel_lib.transform(content, opts).code;
};

const uglify = (content, compressorOpts = {}, beautifierOpts = {}) => {
    const compressor = uglify_lib.Compressor(compressorOpts);
    let ast = uglify_lib.parse(content);
    ast.figure_out_scope();
    ast = ast.transform(compressor);
    ast.figure_out_scope();
    ast.compute_char_frequency();
    ast.mangle_names();
    return ast.print_to_string(beautifierOpts);
};

const gzip = content => {
    return zlib.gzipSync(content);
};

const buz = content => {
    const res = {
        src: content
    };

    res.es5 = babel(res.src);
    res.min = uglify(res.es5);
    res.zip = gzip(res.min);

    return res;
};

module.exports = buz;

const babel_lib = require('babel-core');
const uglify_lib = require('uglify-js');
const jszip_lib = require('jszip');

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

const zip = (content, level = 9) => {
    const jszip = new jszip_lib();
    jszip.file('a.js', content);
    return jszip.generate({
        type: 'nodebuffer',
        compression: 'DEFLATE',
        compressionOptions: {level}
    });
};

const buz = content => {
    const res = {
        src: content
    };

    res.es5 = babel(res.src);
    res.min = uglify(res.es5);
    res.zip = zip(res.min);

    return res;
};

module.exports = buz;

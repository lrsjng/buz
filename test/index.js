const {test, assert, insp} = require('scar');
const buz = require('../lib/buz');

const assert_gzip = (zip, len) => {
    assert.ok(Buffer.isBuffer(zip));
    assert.equal(zip.length, len);
    const magic = [zip[0], zip[1]];
    assert.deepEqual(magic, [31, 139], `expected zip magic number but found ${insp(magic)}`);
};

test('buz()', () => {
    assert.equal(typeof buz, 'function');
});

test('buz() - empty string', () => {
    const content = '';
    const res = buz(content);

    assert.equal(typeof res, 'object');
    assert.equal(res.src, content);
    assert.equal(res.es5, '"use strict";');
    assert.equal(res.min, '');
    assert_gzip(res.zip, 20);
});

test('buz() - basic content', () => {
    const content = 'const fn = () => null';
    const res = buz(content);

    assert.equal(typeof res, 'object');
    assert.equal(res.src, content);
    assert.equal(res.es5, '"use strict";\n\nvar fn = function fn() {\n  return null;\n};');
    assert.equal(res.min, 'var fn=function(){return null};');
    assert_gzip(res.zip, 51);
});

test.cli();

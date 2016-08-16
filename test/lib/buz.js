const {test, assert} = require('scar');
const buz = require('../../lib/buz');

test('buz()', () => {
    assert.equal(typeof buz, 'function');
});

test('buz() - empty string', () => {
    const content = '';
    const res = buz(content);

    assert.equal(typeof res, 'object');
    assert.equal(res.src, content);
    assert.equal(res.es5, '"use strict";');
    assert.equal(res.min, '"use strict";');
    assert.ok(Buffer.isBuffer(res.zip));
    assert.equal(res.zip.length, 121);
});

test('buz() - basic content', () => {
    const content = 'const fn = () => null';
    const res = buz(content);

    assert.equal(typeof res, 'object');
    assert.equal(res.src, content);
    assert.equal(res.es5, '"use strict";\n\nvar fn = function fn() {\n  return null;\n};');
    assert.equal(res.min, '"use strict";var fn=function(){return null};');
    assert.ok(Buffer.isBuffer(res.zip));
    assert.equal(res.zip.length, 152);
});

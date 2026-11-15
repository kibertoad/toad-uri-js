// Loads the built package through its "require" export condition in plain Node.js,
// so module resolution matches what consumers get (Vitest resolves imports differently).
const assert = require('node:assert/strict')
const { equal, parse, serialize } = require('toad-uri-js')

assert.equal(parse('http://a/b').host, 'a')
// IDN conversion goes through punycode
assert.equal(serialize(parse('http://α.com')), 'http://xn--mxa.com/')
assert.equal(serialize(parse('mailto:user@α.com')), 'mailto:user@xn--mxa.com')
assert.ok(equal('HTTP://ABC.COM', 'http://abc.com'))

console.log('CJS package require OK')

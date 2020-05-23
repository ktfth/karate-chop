'use strict';

const assert = require('assert')

function chop(v, arr) {
  let out = -1;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === v) {
      out = i;
      break;
    }
  }
  return out;
}

assert.equal(-1, chop(3, []))
assert.equal(-1, chop(3, [1]))
assert.equal(0,  chop(1, [1]))
//
assert.equal(0,  chop(1, [1, 3, 5]))
assert.equal(1,  chop(3, [1, 3, 5]))
assert.equal(2,  chop(5, [1, 3, 5]))
assert.equal(-1, chop(0, [1, 3, 5]))
assert.equal(-1, chop(2, [1, 3, 5]))
assert.equal(-1, chop(4, [1, 3, 5]))
assert.equal(-1, chop(6, [1, 3, 5]))
//
assert.equal(0,  chop(1, [1, 3, 5, 7]))
assert.equal(1,  chop(3, [1, 3, 5, 7]))
assert.equal(2,  chop(5, [1, 3, 5, 7]))
assert.equal(3,  chop(7, [1, 3, 5, 7]))
assert.equal(-1, chop(0, [1, 3, 5, 7]))
assert.equal(-1, chop(2, [1, 3, 5, 7]))
assert.equal(-1, chop(4, [1, 3, 5, 7]))
assert.equal(-1, chop(6, [1, 3, 5, 7]))
assert.equal(-1, chop(8, [1, 3, 5, 7]))

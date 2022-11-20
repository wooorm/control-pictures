import assert from 'node:assert/strict'
import test from 'node:test'
import {controlPictures} from './index.js'

test('control-pictures', function () {
  assert.equal(controlPictures(), '', 'should not fail without a value')
  assert.equal(controlPictures('␉␊␋␌␍'), '\t\n\v\f\r', 'should work')
  assert.equal(controlPictures('␀'), '\0', 'should support `␀`')
  assert.equal(controlPictures('a␡b'), 'a\u007Fb', 'should support `␡`')

  assert.equal(
    controlPictures('␢␣'),
    controlPictures('␠␠'),
    'should support alt forms of spaces'
  )
  assert.equal(controlPictures('␤'), '\n', 'should use line feeds for `␤`')
  assert.equal(
    controlPictures('␥␦'),
    controlPictures('␡␚'),
    'should support alt forms of DEL, SUB'
  )
})

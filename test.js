import test from 'tape'
import {controlPictures} from './index.js'

test('control-pictures', function (t) {
  t.equal(controlPictures(), '', 'should not fail without a value')
  t.equal(controlPictures('␉␊␋␌␍'), '\t\n\v\f\r', 'should work')
  t.equal(controlPictures('␀'), '\0', 'should support `␀`')
  t.equal(controlPictures('a␡b'), 'a\u007Fb', 'should support `␡`')

  t.equal(
    controlPictures('␢␣'),
    controlPictures('␠␠'),
    'should support alt forms of spaces'
  )
  t.equal(controlPictures('␤'), '\n', 'should use line feeds for `␤`')
  t.equal(
    controlPictures('␥␦'),
    controlPictures('␡␚'),
    'should support alt forms of DEL, SUB'
  )

  t.end()
})

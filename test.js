'use strict'

var test = require('tape')
var m = require('.')

test('control-pictures', function (t) {
  t.equal(m(), '', 'should not fail without a value')
  t.equal(m('␉␊␋␌␍'), '\t\n\v\f\r', 'should work')
  t.equal(m('␀'), '\0', 'should support `␀`')
  t.equal(m('a␡b'), 'a\x7fb', 'should support `␡`')

  t.equal(m('␢␣'), m('␠␠'), 'should support alt forms of spaces')
  t.equal(m('␤'), '\n', 'should use line feeds for `␤`')
  t.equal(m('␥␦'), m('␡␚'), 'should support alt forms of DEL, SUB')

  t.end()
})

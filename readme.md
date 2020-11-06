# control-pictures

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Replace [control pictures][pictures] characters with actual control characters.
Useful for example if you have tests with trailing spaces, or invisible control
characters which you want to display, but also use.

## Install

[npm][]:

```sh
npm install control-pictures
```

## Use

```js
controlPictures() //=> ''
controlPictures('␉␊␋␌␍') //=> '\t\n\v\f\r'
controlPictures('␀') //=> '\0'
controlPictures('a␡b') //=> 'a\x7fb'
controlPictures('␤') //=> '\n'
```

## API

### `controlPictures(value?)`

Replace [control pictures][pictures] with the actual control codes.

Supports U+2400 SYMBOL FOR NULL (␀) through U+2426 SYMBOL FOR SUBSTITUTE FORM
TWO (`␦`).

###### Returns

`string` — Value but with actual control codes.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/wooorm/control-pictures/workflows/main/badge.svg

[build]: https://github.com/wooorm/control-pictures/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/control-pictures.svg

[coverage]: https://codecov.io/github/wooorm/control-pictures

[downloads-badge]: https://img.shields.io/npm/dm/control-pictures.svg

[downloads]: https://www.npmjs.com/package/control-pictures

[size-badge]: https://img.shields.io/bundlephobia/minzip/control-pictures.svg

[size]: https://bundlephobia.com/result?p=control-pictures

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[pictures]: https://en.wikipedia.org/wiki/Control_Pictures

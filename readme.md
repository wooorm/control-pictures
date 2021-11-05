# control-pictures

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Replace pictures for control character codes with actual control characters.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`controlPictures(value?)`](#controlpicturesvalue)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This package replaces pictures for [control character codes][pictures] (such as
`'␊'`) with actual control characters (as in, `'\n'`).
It supports U+2400 SYMBOL FOR NULL (␀) through U+2426 SYMBOL FOR SUBSTITUTE
FORM TWO (`␦`).

## When should I use this?

Use this package if you:

*   have fixtures that would be unreadable or confusing (to tools) if they used
    control characters
*   want to display control characters to users, e.g., trailing spaces

## Install

This package is [ESM only][esm].
In Node.js (version 12.20+, 14.14+, or 16.0+), install with [npm][]:

```sh
npm install controlPictures
```

In Deno with [Skypack][]:

```js
import {controlPictures} from 'https://cdn.skypack.dev/control-pictures@7?dts'
```

In browsers with [Skypack][]:

```html
<script type="module">
  import {controlPictures} from 'https://cdn.skypack.dev/control-pictures@7?min'
</script>
```

## Use

```js
import {controlPictures} from 'control-pictures'

controlPictures() //=> ''
controlPictures('␉␊␋␌␍') //=> '\t\n\v\f\r'
controlPictures('␀') //=> '\0'
controlPictures('a␡b') //=> 'a\x7fb'
controlPictures('␤') //=> '\n'
```

## API

This package exports the following identifier: `controlPictures`.
There is no default export.

### `controlPictures(value?)`

Replace pictures for control character codes with actual control characters.
Takes a value with pictures (`string`), returns a value with actual control
codes (`string`).

## Types

This package is fully typed with [TypeScript][].
There are no extra exported types.

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 12.20+, 14.14+, and 16.0+.
It also works in Deno and modern browsers.

## Security

This package is safe.

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

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

[skypack]: https://www.skypack.dev

[license]: license

[author]: https://wooorm.com

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/

[pictures]: https://en.wikipedia.org/wiki/Control_Pictures

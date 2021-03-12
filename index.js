var own = {}.hasOwnProperty

var map = {
  '␡': 127 /* DEL */,
  '␢': 32 /* ` ` */,
  '␣': 32 /* ` ` */,
  '␤': 10 /* `\n` */,
  '␥': 127 /* DEL */,
  '␦': 26 /* SUB */
}

/**
 * Replace control pictures with the actual control codes.
 *
 * Supports U+2400 SYMBOL FOR NULL (␀) through U+2426 SYMBOL FOR SUBSTITUTE
 * FORM TWO (`␦`).
 *
 * @param {string} [value] Value with control pictures
 * @returns {string} Value but with actual control codes
 */
export function controlPictures(value) {
  return String(value === undefined || value === null ? '' : value).replace(
    /[\u2400-\u2426]/g,
    replacer
  )
}

/**
 * @param {string} d
 */
function replacer(d) {
  return String.fromCharCode(
    own.call(map, d) ? map[d] : d.charCodeAt(0) - 9216 /* `␀` */
  )
}

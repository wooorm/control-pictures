const own = {}.hasOwnProperty

/** @type {Record<string, number>} */
const map = {
  '␡': 127 /* DEL */,
  '␢': 32 /* ` ` */,
  '␣': 32 /* ` ` */,
  '␤': 10 /* `\n` */,
  '␥': 127 /* DEL */,
  '␦': 26 /* SUB */
}

/**
 * Replace pictures for control character codes with actual control characters.
 *
 * @param {string} [value]
 *   Value with control pictures
 * @returns {string}
 *   Value but with actual control codes
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

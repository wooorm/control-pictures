var own = {}.hasOwnProperty

var map = {
  '␡': 127 /* DEL */,
  '␢': 32 /* ` ` */,
  '␣': 32 /* ` ` */,
  '␤': 10 /* `\n` */,
  '␥': 127 /* DEL */,
  '␦': 26 /* SUB */
}

export function controlPictures(value) {
  return String(value == null ? '' : value).replace(
    /[\u2400-\u2426]/g,
    replacer
  )
}

function replacer(d) {
  return String.fromCharCode(
    own.call(map, d) ? map[d] : d.charCodeAt(0) - 9216 /* `␀` */
  )
}

export function isNotExceedLength(input, length) {
  return input.length <= length;
}

/** TODO: Number, String 두 개를 받고 있음. 역할분리? */
export function isNotEmpty(input) {
  return input !== '' && input !== undefined;
}

export function isNumericString(input) {
  return true;
}

export function isPositveNumberString(input) {
  return true;
}

export function isObject(item) {
  return Object.prototype.toString.call(item) === '[object Object]'
}

export function getPercentage(count, total) {
  return total === 0 ? 0 : parseInt(count / total * 100, 10)
}

export function formatNumber(number, digit) {
  // const sign = number ? number < 0 ? -1 : 1 : 0;
  // number = number * sign + '';
  // const dec = number.match(/\.\d+$/);
  // const int = number.match(/^[^\.]+/);
  //
  // const formattedNumber = (sign < 0 ? '-' : '') + ("0" + int).slice(-digit) + (dec !== null ? dec : '');
  const formattedNumber = number.toFixed(digit);
  console.log(formattedNumber);
  return formattedNumber;
}
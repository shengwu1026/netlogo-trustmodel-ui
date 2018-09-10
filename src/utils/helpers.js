export function isObject(item) {
  return Object.prototype.toString.call(item) === '[object Object]'
}

export function getPercentage(count, total) {
  return total === 0 ? 0 : parseInt(count / total * 100, 10)
}

export function formatNumber(number, digit) {
  const formattedNumber = number.toFixed(digit);
  return formattedNumber;
}
export function isObject(item) {
  return Object.prototype.toString.call(item) === '[object Object]'
}

export function getPercentage(count, total) {
  return total === 0 ? 0 : parseInt(count / total * 100, 10)
}

export function formatNumber(number, digit) {
  // console.log('formatNumber', number);
  if(number) {
    const formattedNumber = number.toFixed(digit);
    return formattedNumber;
  } else {
    return number
  }
}

export function convertCordinate(cordinate, adjustment) {
  return Number(cordinate) + adjustment
}
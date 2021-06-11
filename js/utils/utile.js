/**
 * @desc Проверяет, что строка не превосходит максимально установленную длину строки.
 * @param {string} string
 * @param {number} maxLength
 * @return {boolean}
 */
function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}

/**
 * @desc Возвращает случайное число в установленном диапазоне.
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
function randomRange(min= 0, max= 1) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  return Math.floor(Math.random() * (upper - lower  + 1) + lower);
}

/**
 * Возвращает индекс последнего элемента массива
 * @param {array} array
 * @return {number}
 */
function getLastArrayIndex(array) {
  return array.length - 1;
}

export {
  checkStringLength,
  randomRange,
  getLastArrayIndex
};

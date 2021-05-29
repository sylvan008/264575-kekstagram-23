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
  if (min < 0 || max < 0) {
    throw Error('min и max должны быть больше нуля!');
  }
  if (min === max) {
    return min;
  }
  if (min > max) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min  + 1)) + min;
}

randomRange(5, 10);
checkStringLength('Кекс', 5);

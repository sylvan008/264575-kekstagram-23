/**
 * @desc Функция заглушка
 */
function noop() {}

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

/**
 *
 * @param {Event} evt
 * @return boolean
 */
function isEscEvent(evt) {
  const key = evt.key.toLowerCase();
  return key === 'escape' || key === 'esc';
}

/**
 * Создаёт функцию, которая получает n уникальных элементов из массива
 * @param {number} count
 * @return {function(*=): *[]}
 */
function createGetterRandomArrayElements(count) {
  const obtainedElements = [];
  return (elements=[]) => {
    const countElements = getLastArrayIndex(elements);
    while (obtainedElements.length < count) {
      const element = elements[randomRange(0, countElements)];
      if (!obtainedElements.includes(element)) {
        obtainedElements.push(element);
      }
    }
    return obtainedElements;
  };
}

export {
  noop,
  checkStringLength,
  randomRange,
  getLastArrayIndex,
  isEscEvent,
  createGetterRandomArrayElements
};

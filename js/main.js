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

randomRange(5, 10);
checkStringLength('Кекс', 5);

const STUB_COUNT = 25;
const COMMENT_PER_PHOTO = 3;
const sentences = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const photoDesriptions = [
  'Пляж перед предпляжьем',
  'Go to the beach',
  'Лазурная бухта',
  'Выдающийся фотограф О_О',
  'Отмоченный рис',
  'Бетмобиль',
  'Много нас а он один',
  'Компот',
  'Пролетая над гнездом кукушки',
  'Тапки под кроватку',
  'Надёжный забор',
  'Ауди',
  'Здоровая пища',
  'Кексбургер',
  'Дутыши Макфлая',
  'Путешествие вдаль',
  'Хор Турецкого',
  'Вот это раритет',
  'Чтобы кексу было видней, куда мстить',
  'Прямо строевой смотр',
  'Прям настоящий кексограм',
  'Чай не утопнут',
  'Себастиан',
  'Руки вверх!',
  'Ты не ты, когда голоден!',
];
const namesPhotographers = [
  'Олег',
  'Елизавета',
  'Петраков',
  'Галустян',
  'Высоцкий',
];

function createStubComment(length, idPreset) {
  return new Array(length)
    .fill({})
    .map((init, index) => ({
      id: (idPreset + 10) * 100 + index,
      avatar: `img/avatar-${randomRange(1, 6)}.svg`,
      message: sentences[randomRange(0, sentences.length - 1)],
      name: namesPhotographers[randomRange(0, namesPhotographers.length - 1)],
    }));
}

function createStubPublishedPhoto(length, stubCommentsFn=createStubComment) {
  return new Array(length)
    .fill({})
    .map((init, index) => ({
      id: index,
      url: `photos/${index}.jpg`,
      description: photoDesriptions[index],
      likes: randomRange(15, 200),
      comments: stubCommentsFn(COMMENT_PER_PHOTO, index),
    }));
}

createStubPublishedPhoto(STUB_COUNT);

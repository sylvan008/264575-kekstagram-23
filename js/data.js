import {randomRange, getLastArrayIndex} from './utils/utile.js';

const sentences = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const photoDescriptions = [
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
      message: sentences[randomRange(0, getLastArrayIndex(sentences))],
      name: namesPhotographers[randomRange(0, getLastArrayIndex(namesPhotographers))],
    }));
}

function createStubPublishedPhoto(countPhoto=16, countComment=3, stubCommentsFn=createStubComment) {
  return new Array(countPhoto)
    .fill({})
    .map((init, index) => ({
      id: index,
      url: `photos/${index + 1}.jpg`,
      description: photoDescriptions[index],
      likes: randomRange(15, 200),
      comments: stubCommentsFn(countComment, index),
    }));
}

export {createStubPublishedPhoto};

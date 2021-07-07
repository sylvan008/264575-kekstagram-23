import {createGetterRandomArrayElements} from './utils/utile.js';

const imgFiltersElement = document.querySelector('.img-filters');
const imgFiltersForm = imgFiltersElement.querySelector('.img-filters__form');
const defaultFilter = imgFiltersForm.querySelector('#filter-default');

const HIDE_CLASS = 'img-filters--inactive';
const ACTIVE_FILTER_CLASS = 'img-filters__button--active';

let currentFilter = defaultFilter;

function showRandomImages(images, count=10) {
  const takeRandomElements = createGetterRandomArrayElements(count);
  return takeRandomElements(images);
}

function showWithMostComments(images) {
  return images.slice().sort((imageA, imageB) => imageB.comments.length - imageA.comments.length);
}

function showImgFilters() {
  imgFiltersElement.classList.remove(HIDE_CLASS);
}

function createFilterChangeHandler(cb, images) {
  showImgFilters();

  const ImageFilters = {
    'filter-random': showRandomImages,
    'filter-discussed': showWithMostComments,
  };

  imgFiltersForm.addEventListener('click', (evt) => {
    if (evt.target.matches('.img-filters__button')) {
      currentFilter.classList.remove(ACTIVE_FILTER_CLASS);
      evt.target.classList.add(ACTIVE_FILTER_CLASS);
      currentFilter = evt.target;
      const filterName = evt.target.id;
      if (ImageFilters[filterName]) {
        const filteredImages = ImageFilters[filterName](images);
        cb(filteredImages);
      } else {
        cb(images);
      }
    }
  });
}

export {createFilterChangeHandler};

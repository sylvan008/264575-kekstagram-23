import {viewImagesThumbnails} from './view-images-thumbnails.js';
import {viewFullImage} from './view-full-image.js';
import {getData} from './api.js';
import { viewErrorMessage } from './utils/error-message.js';
import { createFilterChangeHandler } from './image-filter.js';
import {debounce} from './utils/utile.js';
import './user-modal.js';
import './image-preview.js';

const RENDER_DELAY = 500;

const viewThumbnails = viewImagesThumbnails.bind(null, viewFullImage);

getData(
  () => viewErrorMessage('Не удалось загрузить фотографии. Попробуйте зайти позже.'),
  (data) => {
    viewThumbnails(data);
    createFilterChangeHandler(debounce(viewThumbnails, RENDER_DELAY), data);
  },
);

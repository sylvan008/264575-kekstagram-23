import {viewImagesThumbnails} from './view-images-thumbnails.js';
import {viewFullImage} from './view-full-image.js';
import {getData} from './api.js';
import { viewErrorMessage } from './utils/error-message.js';
import './user-modal.js';

const viewThumbnails = viewImagesThumbnails.bind(null, viewFullImage);

getData(
  () => viewErrorMessage('Не удалось загрузить фотографии. Попробуйте зайти позже.'),
  viewThumbnails,
);

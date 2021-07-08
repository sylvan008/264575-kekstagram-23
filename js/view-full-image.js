import {setComments} from './image-comments.js';
import {createPopupEscHandler} from './utils/utile.js';

const page = document.body;
const bigPicture = document.querySelector('.big-picture');
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const description = bigPicture.querySelector('.social__caption');
const pictureCancel = bigPicture.querySelector('#picture-cancel');

const MODAL_OPEN = 'modal-open';
const HIDDEN = 'hidden';

// eslint-disable-next-line no-use-before-define
const onPopupEscKeydown = createPopupEscHandler(closeImageHandler);

function closeImageHandler() {
  page.classList.remove(MODAL_OPEN);
  bigPicture.classList.add(HIDDEN);
  page.removeEventListener('keydown', onPopupEscKeydown);
}

function viewFullImage(imageData) {
  page.classList.add(MODAL_OPEN);
  bigPicture.classList.remove(HIDDEN);
  bigPictureImage.src = imageData.url;
  likesCount.textContent = imageData.likes;
  description.textContent = imageData.description;
  setComments(imageData.comments);

  page.addEventListener('keydown', onPopupEscKeydown);
}

pictureCancel.addEventListener('click', closeImageHandler);


export {viewFullImage};

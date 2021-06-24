import {setComments} from './image-comments.js';

const page = document.body;
const bigPicture = document.querySelector('.big-picture');
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const description = bigPicture.querySelector('.social__caption');
const pictureCancel = bigPicture.querySelector('#picture-cancel');

const MODAL_OPEN = 'modal-open';
const HIDDEN = 'hidden';

function closeImageHandler() {
  page.classList.remove(MODAL_OPEN);
  bigPicture.classList.add(HIDDEN);
}

function viewFullImage(imageData) {
  page.classList.add(MODAL_OPEN);
  bigPicture.classList.remove(HIDDEN);
  bigPictureImage.src = imageData.url;
  likesCount.textContent = imageData.likes;
  description.textContent = imageData.description;
  setComments(imageData.comments);
}

pictureCancel.addEventListener('click', closeImageHandler);
page.addEventListener('keydown', (evt) => {
  if (evt.key.toLowerCase() === 'escape') {
    closeImageHandler();
  }
});

export {viewFullImage};

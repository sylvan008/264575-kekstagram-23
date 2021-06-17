const page = document.body;
const bigPicture = document.querySelector('.big-picture');
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsCount = socialCommentCount.querySelector('.comments-count');
const description = bigPicture.querySelector('.social__caption');
const pictureCancel = bigPicture.querySelector('#picture-cancel');
const commentList = bigPicture.querySelector('.social__comments');
const commentTemplate = commentList.querySelector('.social__comment');

const MODAL_OPEN = 'modal-open';
const HIDDEN = 'hidden';

function clearComments() {
  commentList
    .querySelectorAll('.social__comment')
    .forEach((element) => element.remove());
}

function closeImageHandler() {
  page.classList.remove(MODAL_OPEN);
  bigPicture.classList.add(HIDDEN);
}

function createComment(template, commentData) {
  const avatar = template.querySelector('.social__picture');
  const text = template.querySelector('.social__text');
  avatar.src = commentData.avatar;
  avatar.alt = commentData.name;
  text.textContent = commentData.message;
  return template;
}

function createCommentsNodesList(commentsData) {
  const fragment = document.createDocumentFragment();
  commentsData.forEach((commentData) => {
    const newComment = createComment(commentTemplate.cloneNode(true), commentData);
    fragment.appendChild(newComment);
  });
  return fragment;
}

function viewFullImage(imageData) {
  clearComments();
  page.classList.add(MODAL_OPEN);
  bigPicture.classList.remove(HIDDEN);
  bigPictureImage.src = imageData.url;
  likesCount.textContent = imageData.likes;
  commentsCount.textContent = imageData.comments.length;
  description.textContent = imageData.description;
  const commentsNodes = createCommentsNodesList(imageData.comments);
  commentList.append(commentsNodes);
  // TODO количество комментариев временно скрыто
  socialCommentCount.classList.add(HIDDEN);
}

pictureCancel.addEventListener('click', closeImageHandler);
page.addEventListener('keydown', (evt) => {
  if (evt.key.toLowerCase() === 'escape') {
    closeImageHandler();
  }
});

export {viewFullImage};

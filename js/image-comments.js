const COMMENT_LOAD_STEP = 5;

const socialBlock = document.querySelector('.social');
const commentList = socialBlock.querySelector('.social__comments');
const commentTemplate = commentList.querySelector('.social__comment');
const socialCommentsLoader = socialBlock.querySelector('.social__comments-loader');
const socialCommentCount = socialBlock.querySelector('.social__comment-count');
const commentsCount = socialCommentCount.querySelector('.comments-count');

let comments = [];
let currentViewComment = COMMENT_LOAD_STEP;

function clearComments() {
  currentViewComment = COMMENT_LOAD_STEP;
  comments = [];
  commentList
    .querySelectorAll('.social__comment')
    .forEach((element) => element.remove());
}

function setCommentsCount(count=0, totalCount=0) {
  const textNode = socialCommentCount.firstChild;
  textNode.textContent = `${count} из `;
  commentsCount.textContent = totalCount;
}

function createComment(template, commentData) {
  const avatar = template.querySelector('.social__picture');
  const text = template.querySelector('.social__text');
  avatar.src = commentData.avatar;
  avatar.alt = commentData.name;
  avatar.title = commentData.name;
  text.textContent = commentData.message;
  return template;
}

function renderCommentsList(viewComments) {
  const fragment = document.createDocumentFragment();
  viewComments.forEach((commentData) => {
    const newComment = createComment(commentTemplate.cloneNode(true), commentData);
    fragment.appendChild(newComment);
  });
  commentList.append(fragment);
}

function hideCommentsLoader() {
  socialCommentsLoader.classList.add('hidden');
}

function showCommentsLoader() {
  socialCommentsLoader.classList.remove('hidden');
}

function setComments(commentsList) {
  clearComments();
  comments = commentsList.slice();
  const currentComments = comments.slice(0, currentViewComment);
  renderCommentsList(currentComments);
  setCommentsCount(commentList.childElementCount, comments.length);
  showCommentsLoader();
  if (comments.length <= COMMENT_LOAD_STEP) {
    hideCommentsLoader();
  }
}

function onCommentsLoadEvent() {
  const nextViewComment = currentViewComment + COMMENT_LOAD_STEP;
  const addedComments = comments.slice(currentViewComment, nextViewComment);
  renderCommentsList(addedComments);
  currentViewComment = nextViewComment > comments.length ? comments.length : nextViewComment;
  setCommentsCount(currentViewComment, comments.length);
  if (currentViewComment >= comments.length) {
    hideCommentsLoader();
  }
}

socialCommentsLoader.addEventListener('click',  onCommentsLoadEvent);

export {setComments};

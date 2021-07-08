import {resetImageEditor} from './image-editor.js';
import {sendData} from './api.js';

const COMMENT_MAX_LENGTH = 140;
const HASH_TAG_REGULAR = /^#[A-Za-zА-Яа-я0-9]{1,19}$/;

const uploadImageForm = document.querySelector('#upload-select-image');
const hashTagInput = uploadImageForm.querySelector('.text__hashtags');
const commentElement = uploadImageForm.querySelector('.text__description');

function checkDuplicateHashTags(hashTags) {
  const hashTagSet = new Set(hashTags);
  return hashTagSet.size !== hashTags.length;
}

function checkHashTagsByRegularExpression(hashTags) {
  return hashTags.every((hashtag) => HASH_TAG_REGULAR.test(hashtag));
}

function doValidationHashTag(value) {
  const hashTags = value
    .toLowerCase()
    .trim()
    .split(' ');
  if (hashTags.length > 5) {
    hashTagInput.setCustomValidity('Должно быть не более 5 хештегов');
  } else if (checkDuplicateHashTags(hashTags)) {
    hashTagInput.setCustomValidity('Хештеги не должны повторяться');
  } else if (!checkHashTagsByRegularExpression(hashTags)) {
    hashTagInput.setCustomValidity(`Хештег должен начинаться с "#" и состоять только из букв и цифр,
    не превышать 20 символов. Хештеги разделяются пробелами.`);
  } else {
    hashTagInput.setCustomValidity('');
  }
  hashTagInput.reportValidity();
}

function doValidationComment(value) {
  const comment = value.trim();
  if (comment.length > COMMENT_MAX_LENGTH) {
    commentElement.setCustomValidity(`Длина комментария не должна превышать ${COMMENT_MAX_LENGTH} символов`);
  } else {
    commentElement.setCustomValidity('');
  }
  commentElement.reportValidity();
}

function resetForm() {
  uploadImageForm.reset();
  resetImageEditor(true);
}

function setImageUploadFormSubmit(onFail, onSuccess) {
  uploadImageForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      onFail,
      onSuccess,
      new FormData(uploadImageForm),
    );
  });
}

hashTagInput.addEventListener('input', (evt) => {
  doValidationHashTag(evt.target.value);
});
hashTagInput.addEventListener('keydown', (evt) => evt.stopPropagation());

commentElement.addEventListener('input', (evt) => {
  doValidationComment(evt.target.value);
});
commentElement.addEventListener('keydown', (evt) => evt.stopPropagation());

export {resetForm, setImageUploadFormSubmit};

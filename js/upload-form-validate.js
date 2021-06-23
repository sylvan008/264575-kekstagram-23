const uploadImageForm = document.querySelector('#upload-select-image');
const hashTagInput = uploadImageForm.querySelector('.text__hashtags');
const commentElement = uploadImageForm.querySelector('.text__description');

const COMMENT_MAX_LENGTH = 140;
const hashTagRegular = /^#[A-Za-zА-Яа-я0-9]{1,19}$/;

function checkDuplicateHashTags(hashTags) {
  const hashTagSet = new Set(hashTags);
  return hashTagSet.size !== hashTags.length;
}

function checkHashTagsByRegularExpression(hashTags) {
  return hashTags.every((hashtag) => hashTagRegular.test(hashtag));
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
    hashTagInput.setCustomValidity(`Хештег должен начинаться с "#" и состоять только из букв и цифр.
    Хештеги разделяются пробелами.`);
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

function initFormValidation() {
  hashTagInput.addEventListener('input', (evt) => {
    doValidationHashTag(evt.target.value);
  });
  hashTagInput.addEventListener('keydown', (evt) => evt.stopPropagation());

  commentElement.addEventListener('input', (evt) => {
    doValidationComment(evt.target.value);
  });
  commentElement.addEventListener('keydown', (evt) => evt.stopPropagation());
}

export {initFormValidation};

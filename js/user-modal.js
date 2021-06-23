import {isEscEvent} from './utils/utile.js';
import {initFormValidation} from './upload-form-validate.js';

const page = document.body;
const uploadImageForm = document.querySelector('#upload-select-image');
const uploadFileInput = uploadImageForm.querySelector('#upload-file');
const uploadImagePopup = uploadImageForm.querySelector('.img-upload__overlay');
const closeButton = uploadImageForm.querySelector('#upload-cancel');

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    // eslint-disable-next-line no-use-before-define
    closeUserModal();
  }
};

function closeUserModal() {
  uploadFileInput.value = '';
  uploadImagePopup.classList.add('hidden');
  page.classList.remove('modal-open');
  page.removeEventListener('keydown', onPopupEscKeydown);
}

function openUserModal() {
  uploadImagePopup.classList.remove('hidden');
  page.classList.add('modal-open');
  page.addEventListener('keydown', onPopupEscKeydown);
}

function initUserModal() {
  uploadFileInput.addEventListener('change', openUserModal);
  closeButton.addEventListener('click', closeUserModal);
  initFormValidation();
}

export {initUserModal};

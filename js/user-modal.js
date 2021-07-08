import {createPopupEscHandler} from './utils/utile.js';
import {resetForm, setImageUploadFormSubmit} from './upload-form.js';
import {showMessage} from './utils/upload-message.js';

const page = document.body;
const uploadImageForm = document.querySelector('#upload-select-image');
const uploadFileInput = uploadImageForm.querySelector('#upload-file');
const uploadImagePopup = uploadImageForm.querySelector('.img-upload__overlay');
const closeButton = uploadImageForm.querySelector('#upload-cancel');

// eslint-disable-next-line no-use-before-define
const onPopupEscKeydown = createPopupEscHandler(closeUserModal);

function closeUserModal() {
  resetForm();
  uploadImagePopup.classList.add('hidden');
  page.classList.remove('modal-open');
  page.removeEventListener('keydown', onPopupEscKeydown);
}

function openUserModal() {
  uploadImagePopup.classList.remove('hidden');
  page.classList.add('modal-open');
  page.addEventListener('keydown', onPopupEscKeydown);
}

uploadFileInput.addEventListener('change', openUserModal);
closeButton.addEventListener('click', closeUserModal);

setImageUploadFormSubmit(
  () => {
    closeUserModal();
    showMessage('UPLOAD_FAIL');
  },
  () => {
    closeUserModal();
    showMessage('UPLOAD_SUCCESS');
  },
);

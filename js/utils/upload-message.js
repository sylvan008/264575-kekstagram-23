import {isEscEvent} from './utile.js';

const page = document.body;
const successUploadElement = document.querySelector('#success')
  .content
  .querySelector('.success');
const errorUploadElement = document.querySelector('#error')
  .content
  .querySelector('.error');

const MessageElements = {
  UPLOAD_SUCCESS: successUploadElement,
  UPLOAD_FAIL: errorUploadElement,
};

let showedMessage = '';

const onMessageEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    // eslint-disable-next-line no-use-before-define
    removeMessage();
  }
};

function removeMessage() {
  MessageElements[showedMessage].remove();
  showedMessage = '';
  page.removeEventListener('keydown', onMessageEscKeydown);
}

function showMessage(type) {
  showedMessage = type;
  page.insertAdjacentElement('beforeend', MessageElements[type]);
  page.addEventListener('keydown', onMessageEscKeydown);
}

function onMessageClickHandler(evt) {
  if (evt.currentTarget === evt.target || evt.target.matches('button')) {
    removeMessage();
  }
}

successUploadElement.addEventListener('click', onMessageClickHandler);
errorUploadElement.addEventListener('click', onMessageClickHandler);

export {showMessage};

const MESSAGE_TIME_VIEW = 5000;

const page = document.body;
const styles = {
  position: 'absolute',
  top: '0',
  width: '100%',
  backgroundColor: 'red',
  textAlign: 'center',
  margin: '0',
  textTransform: 'none',
  fontWeight: 'bold',
};

function createMessageElement(text) {
  const messageElement = document.createElement('p');
  const styleKeys = Object.keys(styles);
  styleKeys.forEach((key) => messageElement.style[key] = styles[key]);
  messageElement.textContent = text;
  return messageElement;
}

function viewErrorMessage(text) {
  const messageElement = createMessageElement(text);
  page.insertAdjacentElement('afterbegin', messageElement);
  setTimeout(() => {
    messageElement.remove();
  }, MESSAGE_TIME_VIEW);
}

export {viewErrorMessage};

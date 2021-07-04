function getData(onFail, onSuccess) {
  return fetch('https://23.javascript.pages.academy/kekstagram/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.status);
    })
    .then((data) => onSuccess(data))
    .catch((err) => {
      onFail(err);
    });
}

function sendData(onFail, onSuccess, body) {
  return fetch('https://23.javascript.pages.academy/kekstagram', {
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    body,
  })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    }).catch(() => {
      onFail();
    });
}

export {getData, sendData};

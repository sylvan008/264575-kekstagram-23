function createPictureThumbnail(template, {url, comments, likes}) {
  const pictureElement = template.querySelector('.picture__img');
  const pictureComment = template.querySelector('.picture__comments');
  const pictureLikes = template.querySelector('.picture__likes');
  pictureElement.src = url;
  pictureComment.textContent = comments.length;
  pictureLikes.textContent = likes;
  return template;
}

function viewImagesThumbnails(imagesData) {
  const pictures = document.querySelector('.pictures');
  const pictureTemplate = document.querySelector('#picture')
    .content
    .querySelector('.picture');
  const fragment = document.createDocumentFragment();
  imagesData.forEach((photo) => {
    const newPictureMiniature = createPictureThumbnail(pictureTemplate.cloneNode(true), photo);
    fragment.appendChild(newPictureMiniature);
  });

  pictures.appendChild(fragment);
}

export {viewImagesThumbnails};

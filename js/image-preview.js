const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const fileChooser = document.querySelector('#upload-file');
const imageUploadPreview = document.querySelector('.img-upload__preview img');

fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];

  if (file) {
    const fileName = file.name.toLowerCase();
    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      const fileReader = new FileReader();
      fileReader.addEventListener('load', () => {
        imageUploadPreview.src = fileReader.result;
      });
      fileReader.readAsDataURL(file);
    }
  }
});

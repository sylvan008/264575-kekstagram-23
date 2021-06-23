import {createStubPublishedPhoto} from './data.js';
import {viewImagesThumbnails} from './view-images-thumbnails.js';
import {viewFullImage} from './view-full-image.js';
import {initUserModal} from './user-modal.js';

const userPhotos = createStubPublishedPhoto(25, 3);
viewImagesThumbnails(userPhotos, viewFullImage);
initUserModal();

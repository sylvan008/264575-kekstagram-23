import {createStubPublishedPhoto} from './data.js';
import {viewImagesThumbnails} from './view-images-thumbnails.js';

const userPhotos = createStubPublishedPhoto(25, 3);
viewImagesThumbnails(userPhotos);

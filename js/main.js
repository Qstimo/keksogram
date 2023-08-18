import { getPictures } from './source.js';
import { renderPictures } from './renderPic.js';
import { showModal, fileField } from './formRender.js';


renderPictures(getPictures());

fileField.addEventListener('change', () => {
  showModal();
});

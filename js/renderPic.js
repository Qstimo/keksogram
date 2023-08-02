import { renderBigPic } from './renderBigPic.js';

const userComentsTemplate = document.querySelector('#picture').content.querySelector('.picture');

const picturesBlock = document.querySelector('.pictures');


const createPicture = (item) => {
  const element = userComentsTemplate.cloneNode(true);

  element.querySelector('.picture__img').alt = item.description;
  element.querySelector('img').src = item.avatar;
  element.querySelector('.picture__likes').textContent = item.likes;
  element.querySelector('.picture__comments').textContent = item.comments.length;

  element.addEventListener('click', () => {
    renderBigPic(item);
  });

  return element;
};


const renderPictures = (arr) => {
  const userPictureFragment = document.createDocumentFragment();
  arr.forEach((obj) => {
    const pictureElement = createPicture(obj);
    userPictureFragment.appendChild(pictureElement);
  }
  );
  picturesBlock.append(userPictureFragment);
};

export { renderPictures };

import { getPictures } from './source.js';

const userComentsTemplate = document.querySelector('#picture').content;
const userCommentsFragment = document.createDocumentFragment();
const picturesBlock = document.querySelector('.pictures');


const userPicture = getPictures();


userPicture.forEach((item) => {
  const element = userComentsTemplate.cloneNode(true);
  element.querySelector('img').src = item.avatar;
  element.querySelector('.picture__likes').textContent = item.likes;
  element.querySelector('.picture__comments').textContent = item.comments.length;
  userCommentsFragment.appendChild(element);
}
);
picturesBlock.appendChild(userCommentsFragment);

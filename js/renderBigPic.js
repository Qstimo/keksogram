const bigPucture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const bigPhoto = bigPucture.querySelector('.big-picture__img img');
const bigPhotoDescriptions = bigPucture.querySelector('.social__caption');
const bigPhotoLikes = bigPucture.querySelector('.likes-count');
const bigPhotoCommentsCount = bigPucture.querySelector('.comments-count');
const bigPhotoComments = bigPucture.querySelector('.social__comments');
const cancelButton = document.querySelector('.big-picture__cancel');

const bigPictureCreate = ({ avatar, likes, descriptions, comments }) => {
  bigPhoto.src = avatar;
  bigPhotoDescriptions.textContent = descriptions;
  bigPhotoLikes.textContent = likes;
  bigPhotoCommentsCount.textContent = comments.length;
  bigPucture.classList.remove('hidden');
  body.classList.add('modal-open');
};

function onEscKeyDown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hiddenBigPicture();
  }
}

const hiddenBigPicture = () => {
  bigPucture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyDown);

};




const commentConstructor = ({ avatar, message, name }) => {
  const comment = document.createElement('li');
  comment.innerHTML = '<img class="social__picture" s src=" " alt=" " width="35" height="35" /><p class="social__text"></p>';
  comment.classList.add('social__comment');
  comment.querySelector('.social__picture ').src = avatar;
  comment.querySelector('.social__picture ').alt = name;
  comment.querySelector('.social__text').textContent = message;
  return comment;
};

function commentsConstructor(item) {
  const arrComments = item.comments;
  const comentFragment = document.createDocumentFragment();

  arrComments.forEach((obj) => {
    const element = commentConstructor(obj);
    comentFragment.appendChild(element);
  });
  bigPhotoComments.append(comentFragment);
}


const renderBigPic = (item) => {
  bigPictureCreate(item);
  commentsConstructor(item);
};

cancelButton.addEventListener('click', hiddenBigPicture);

export { renderBigPic };

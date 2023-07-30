

const picturesBlock = document.querySelector('.pictures');
const photo = picturesBlock.querySelectorAll('.picture');
const bigPucture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const bigPhoto = bigPucture.querySelector('.big-picture__img img');
console.log(photo);


// //функция для увеличения фотоs
// photo.addEventListener('click', () => {
//   bigPucture.classList.remove('hidden');
//   // bigPucture.querySelector('.big-picture__img').src = item.avatar;
// });

for (let i = 0; i < photo.length; i++) {
  const item = photo[i];

  item.addEventListener('click', () => {
    const itemPhoto = item.querySelector('.picture__img');
    console.log(itemPhoto.src);
    console.log(bigPhoto.src);
    bigPhoto.src = itemPhoto.src;
    bigPucture.classList.remove('hidden');
    body.classList.add('modal-open');
    // bigPucture.querySelector('.big-picture__img').src = item.avatar;
  });
}




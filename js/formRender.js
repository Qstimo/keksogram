const fileField = document.querySelector('#upload-file');
const imgOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const closeCancelButton = document.querySelector('.img-upload__cancel');
const imgUpload = document.querySelector('.img-upload__form');


const closeButton = () => {
  imgOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown');
  closeCancelButton.removeEventListener('click', closeButton);
  imgUpload.reset();
};

const showModal = () => {
  imgOverlay.classList.remove('hidden');
  // удаляем класс hidden у элемента .img-upload__overlay
  body.classList.add('modal-open');
  // тегу body задаем класс modal-open
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
      closeButton();
    }
  });
  closeCancelButton.addEventListener('click', () => closeButton());
  // добавляем обработчик отслеживания нажатия клавиши Esc
};


export { fileField, showModal, };



const form = document.querySelector('.img-upload__form');

const hashtagField = document.querySelector('.text__hashtags');

const pristine = new Pristine(form, {
  classTo: 'img-upload__element',
  errorTextParent: 'img-upload__element',
  errorTextClass: 'img-upload__error',
});


const validateTags = (value) => {
  // проверка значения поля на соответствие требований ТЗ
  // функция должна вернуть true либо false
};

pristine.addValidator(
  hashtagField,
  validateTags,
  'Неправильно заполнены хэштеги'
);



export { pristine };



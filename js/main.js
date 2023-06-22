console.log(true);

const randomInteger = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};
// let words = ['иди в жепу', 'доброй ночи', 'красив и уродлив как сладкая жизнь', 'синдром туррета это круто'];
// console.log(words[randomInteger(0,3)]);

const maxLenght = (str, max) => {
  if (str.length < max) {
    console.log(true);
  } else {
    console.log(false);
  }
};

maxLenght('яблоки', 5);

const descriptions = [
  'Летний чил на югах. #тай #отдых #лето #чил #travel #travelgram #summergram #chill',
  'Тестим новую камеру! #camera #test #new #newcameratest #pic #photo #instaphoto',
  'Затусили с друзьями на море #laptevsea #north #northeastpassage',
  'Как же круто тут кормят #food #foodgram #instafood #delicious #yummy',
  'Отдыхаем... #chill #relax #group #photo',
  'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......',
  'Вот это тачка! #wow #car #carwow #drive',
  '#fun #party #cool #young',
  'Господи, это такая милота, я сейчас умру от нежности, у меня закшалил мимимиметр',
  'Хорошо, когда в жизни есть #друзья, которые вместе со мной могут зайти в #барнарубинштейна и бахнуть #пивка',
  'Норм',
];

let arrCommit = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',];


let names = ['Артём', 'Ибрагим', 'Эдуард', 'Михаил', 'Игорь'];


function getRandomArrayElement(array) {
  return array[randomInteger(0, array.length - 1)]
}


const createMessage = () =>
  Array.from({ length: randomInteger(1, 2) }, () =>
    getRandomArrayElement(arrCommit)
  ).join(' ');


const createComment = (index) => ({
  id: index,
  avatar: `img/avatar-${randomInteger(1, 6)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(names),
});



// const getPictures = () => {
//   const arr = [];
//   for (let i = 0; i < 25; i++) {
//     const picture = createPicture();
//     arr.push(picture);
//   }
//   return arr;
// };

const  createPicture = (index) => ({

  id: index,
  avatar: `photos/${index}.jpg`,
  description: getRandomArrayElement(descriptions),
  likes: randomInteger(15, 200),
  comments: Array.from(
    { length: randomInteger(0, 6) },
    (_, commentIndex) => createComment(commentIndex + 1)
  ),

});

const getPictures = () =>
Array.from({length: 25 }, (_, puctureIndex) =>
createPicture (puctureIndex +1)
)

maxLenght('', 140);
getPictures();

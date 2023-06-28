
const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

function getRandomArrayElement(array) {
  return array[randomInteger(0, array.length - 1)]
}


// const maxLenght = (str, max) => {
//   if (str.length < max) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };

export { randomInteger, getRandomArrayElement };

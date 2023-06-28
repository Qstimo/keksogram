import { createPicture } from './data.js';
const getPictures = () =>
  Array.from({ length: 25 }, (_, puctureIndex) =>
    createPicture(puctureIndex + 1)
  );

export { getPictures };

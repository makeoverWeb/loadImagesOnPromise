'use strict';

import loadAndDisplayImages from './loadAndDisplayImages.js';

// массив не менять!!!
const list = [
  'https://cdn.fishki.net/upload/post/2017/03/19/2245758/tn/02-funny-cat-wallpapercat-wallpaper.jpg',
  'https://mirpozitiva.ru/uploads/posts/2017-04/medium/1492620921_06.jpg',
  'https://this.url/doesnt/exist.jpg',
  'https://bm.img.com.ua/nxs/img/prikol/images/large/1/2/308321_879389.jpg',
  'https://cs8.pikabu.ru/post_img/big/2016/09/07/9/1473263025126241194.jpg'
];

$(function() {
  loadAndDisplayImages(list)
    .then(function (loadRes) {
      console.log(loadRes); // у вас должен получиться объект-результат: { loaded: ['массив', 'загруженных'], notLoaded: ['зафэйленные, 'урлы'] }
    })
    .catch(function (err) {
      console.log(err);
    });
});


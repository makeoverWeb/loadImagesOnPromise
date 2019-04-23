'use strict';

export default function loadAndDisplayImages(imgList) {

  const iterListImg = {
    loaded: [],
    notLoaded: []
  };

  return new Promise(function(resolve) {
    imgList.forEach(el => {
      loadImage(el)
      .then(function(url) {
        $('.images').append('<img src="'+url+'" style="width: 100%" />');
        iterListImg.loaded.push(el);
      })
      .catch(function(url) {
        console.log("не удалось загрузить изображение по указанному пути: ", url);
        iterListImg.notLoaded.push(el);
      });
    })
    return resolve(iterListImg);
  });

  function loadImage(url) {
    return new Promise(function (resolve, reject) {
      const img = new Image();
      img.onload = function () {
        return resolve(url);
      };
      img.onerror = function () {
        return reject(url);
      };
      img.src = url;
    });
  }
};

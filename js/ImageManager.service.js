(function() {
  angular.module('image-gallery.ImageManager', [])
    .service('ImageManager', ImageManager);

  function ImageManager() {
    images: []
  }

  ImageManager.prototype.addImage = function addImage(url) {
    this.images.push({
      url: url,
      comments: []
    });
  };
})();
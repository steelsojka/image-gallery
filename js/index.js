(function() {
  angular.module('image-gallery', [
    'image-gallery.ImageManager',
    'image-gallery.components.ImageGallery'
  ])
    .decorator('$http', $httpDecorator)
    .run(initialize);

  initialize.$inject = ['ImageManager'];
  function initialize(ImageManager) {

    // For bootstrapping purposes
    var images = [
      // List of urls
    ];

    images.forEach(ImageManager.addImage.bind(ImageManager));
  }

  // This is merely to mock the $http service since we don't have
  // a backend. This is not necesary for the exercise, so
  // ignore this...
  $httpDecorator.$inject = ['$delegate', '$q'];
  function $httpDecorator($delegate, $q) {

    $delegate.fakePost = function fakePost(url, data) {
      return $q(function(resolve, reject) {
        setTimeout(function() {
          resolve(data);
        }, 1000);
      });
    };

    return $delegate;
  }
})();

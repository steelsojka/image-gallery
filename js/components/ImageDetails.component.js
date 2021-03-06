(function() {
  angular.module('image-gallery.components.ImageDetails', [])
    .controller('ImageDetailsController', ImageDetailsController)
    .component('imageDetails', {
      templateUrl: 'js/components/ImageDetails.html',
      controller: 'ImageDetailsController',
      bindings: {
        image: '<'
      }
    });

  ImageDetailsController.$inject = ['$http'];
  function ImageDetailsController($http) {
    angular.extend(this, {
      $http: $http,
      image: null,
      pendingComment: '',
      isSaving: false
    });
  }

  angular.extend(ImageDetailsController.prototype, {
    submit: function submit() {
      this.isSaving = true;

      // Using a fake post here... normally 'post' would be used.
      return this.$http.fakePost('/images/123/comments', { comment: this.pendingComment })
        .then(this.onCommentSuccess.bind(this));
    },
    clearPending: function clearPending() {
      this.pendingComment = '';
    },
    onCommentSuccess: function onSuccess(res) {
      this.image.comments.push(res.comment);
      this.clearPending();
      this.isSaving = false;
    }
  });
})();

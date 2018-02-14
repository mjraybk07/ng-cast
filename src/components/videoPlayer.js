angular.module('video-player')

  .component('videoPlayer', {
    controller: function () {
      this.isAutoplay = false;

      this.urlFunction = function () {
        return 'https://www.youtube.com/embed/' + this.currentVideo.id.videoId;
      };

      this.checkAutoplay = function(){
        return this.isAutoplay ? '?autoplay=1' : '';
      };

    },

    bindings: {
      currentVideo: '<'
    },

    templateUrl: 'src/templates/videoPlayer.html'

  });

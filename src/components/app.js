angular.module('video-player')

  .component('app', {
    controller: function() {
      this.currentVideo = window.exampleVideoData[0];
      this.videos = window.exampleVideoData;

      this.selectVideo = (selectedVideo) => {
        this.currentVideo = selectedVideo;
      };

      this.result = (data) => {
        this.videos = data;
        this.currentVideo = data[0];
      };

    },

    templateUrl: 'src/templates/app.html'

  });

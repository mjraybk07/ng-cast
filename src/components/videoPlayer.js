angular.module('video-player')

.component('videoPlayer', {
  controller: function(){
    console.log(this)
    // console.log($scope)
    // this.url = "https://www.youtube.com/embed/" + this.currentVideo.id.videoId;
    this.test = "ttest"
    // debugger
  },



  bindings: {
    currentVideo: "<"
  },

  templateUrl: 'src/templates/videoPlayer.html'

});

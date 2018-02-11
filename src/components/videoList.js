angular.module('video-player')

.component('videoList', {

  controller: function($scope){
    console.log(this)
  },

  bindings: {
    videos: "<"
  },

  templateUrl: 'src/templates/videoList.html'

});

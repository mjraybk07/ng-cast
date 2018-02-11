angular.module('video-player')

.component('app', {
  controller: function($scope) {
    this.selectVideo = () => {
    };
    this.searchResults = () => {
    };
    this.currentVideo = window.exampleVideoData[0];
    this.videos = window.exampleVideoData;
    this.handleClick = function(arg){
      this.currentVideo = arg;
    }
    //console.log(this.currentVideo)
  },

  templateUrl: 'src/templates/app.html'

});

angular.module('video-player')

.component('app', {
  controller: function($scope, youTube) {
    this.selectVideo = () => {
    };
    this.searchResults = () => {
    };
    this.currentVideo = window.exampleVideoData[0];
    this.videos = window.exampleVideoData;
    this.click = function(arg){
      console.log("called");
      this.currentVideo = arg;
    };
    this.search = (query) => {
      console.log('query: ', query);
      // console.log(youTube)
      youTube.sendRequest(this.handleApiRequest, 'panda')
    };

    // this.$onInit = function () {
    //    this.search('panda')
    // }
    this.handleApiRequest = (data) => {
      this.videos = data;
    }
  },



  templateUrl: 'src/templates/app.html'

});

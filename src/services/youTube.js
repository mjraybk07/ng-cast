angular.module('video-player')
.service('youTube', function($http) {
  // TODO
  this.sendRequest = function(callback, text){
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      part: text,
      data: {
        'key': YOUTUBE_API_KEY,
        'maxResults': '5',
        'part': 'snippet',
        'q': text,
      }
    })
    .then( (response) => {
      callback(response)
    })
  }
});

angular.module('video-player')

.component('videoListEntry', {
  controller: function($scope){
    console.log(this)
    this.onClick = () => {
      $scope.$parent.$parent.$parent.$ctrl.handleClick(this.video)
    };
  },

  bindings: {
    video: "<"
  },

  templateUrl: 'src/templates/videoListEntry.html'

});

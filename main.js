angular.module('mailApp', ['infinite-scroll'])
  .controller('MailCtrl', function($scope, $http) {
    // get the messages
    $scope.messages = [];

    $scope.getMoreMessages = function() {
      $http.get('https://morning-falls-3769.herokuapp.com/api/messages?start=' + $scope.messages.length)
        .success(function(response) {
          $scope.messages.concat(response);
        })
        .error(function(response) {
          // show message if no response
          $scope.alert = 'Uh oh! We\'re unable to get your messages at the moment';
        })
    };

    $scope.getMoreMessages();

  });

angular.module('mailApp', ['infinite-scroll'])
  .controller('MailCtrl', function($scope, $http) {
    // get the messages
    $http.get('https://morning-falls-3769.herokuapp.com/api/messages')
      .success(function(response) {
        $scope.messages = response;
        $scope.getMoreMessages = function() {
          var lastMessage = $scope.messages[$scope.messages.length - 1];
          for (var i = 1; i <= 20; i++) {
            $scope.messages.push($scope.messages[i]);
          }
        };
      })
      .error(function(response) {
        // show message if no response
        $scope.alert = 'Uh oh! We\'re unable to get your messages at the moment';
      })
  });

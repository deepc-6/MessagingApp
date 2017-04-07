myApp
    .controller('messageController', function ($scope, $http, $stateParams) {

        $scope.currentUserId = $stateParams.currentUserId;

        $scope.userlist = [];
        $scope.messagelist = [];

        $http.get('/api/userlist')
            .then(function (res) {
                $scope.userlist = res.data;
            });

        $scope.getUserNameById = function (_userId) {
            var userName = '';
            angular.forEach($scope.userlist, function (_user) {
                if (_user._id === _userId) {
                    userName = _user.username;
                }
            });
            return userName;
        };

        $scope.showInbox = function () {
            $http.get('/api/viewinbox/' + $scope.currentUserId)
                .then(function (res) {
                    $scope.messagelist = res.data;
                });
        };

        $scope.showOutbox = function () {
            $http.get('/api/viewoutbox/' + $scope.currentUserId)
                .then(function (res) {
                    $scope.messagelist = res.data;
                });
        };

        $scope.sendMessage = function (_receiverId) {
            var messageInput = '';
            angular.forEach($scope.userlist, function (_user) {
                if (_user._id === _receiverId) {
                    messageInput = _user.messageInput;
                }
            });
            var messageObj = {
                from: $scope.currentUserId,
                to: _receiverId,
                message: messageInput
            };
            $http.post('/api/sendmessage', messageObj)
                .then(function(response) {
                    console.log('Controller response', response);
                    angular.forEach($scope.userlist, function (_user) {
                        _user.messageInput = '';
                    });
                });
        };

    });
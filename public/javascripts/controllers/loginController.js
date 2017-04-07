myApp
    .controller('loginController', function ($scope, $http, $state) {

        $scope.resetInputs = function () {
            $scope.loginUsername = '';
            $scope.loginPassword = '';
            $scope.registerUsername = '';
            $scope.registerPassword = '';
            $scope.registerEmail = '';
        };

        $scope.hideAlerts = function () {
            $scope.showAlertNoMatch = false;
            $scope.showAlertNoUser = false;
            $scope.showAlertEmpty = false;
            $scope.showAlertExists = false;
            $scope.showAlertAddSuccess = false;
        };

        $scope.resetInputs();

        $scope.register = function () {
            var dataObj = {
                registerUsername: $scope.registerUsername,
                registerPassword: $scope.registerPassword,
                registerEmail: $scope.registerEmail
            };
            if ($scope.registerUsername !== '' && $scope.registerPassword !== '' && $scope.registerEmail !== '') {
                $http.post('/api/adduser', dataObj)
                    .then(function (response) {
                        if (response.data === 'alreadyuser') {
                            $scope.hideAlerts();
                            $scope.showAlertExists = true;
                            $scope.resetInputs();
                        } else {
                            $scope.hideAlerts();
                            $scope.showAlertAddSuccess = true;
                            $scope.resetInputs();
                        }
                    });
            } else {
                $scope.hideAlerts();
                $scope.showAlertEmpty = true;
                $scope.resetInputs();
            }
        };

        $scope.login = function () {
            var dataObj = {
                loginusername : $scope.loginUsername,
                loginpassword: $scope.loginPassword
            };
            $http.post('/api/loginuser', dataObj)
                .then(function(response) {
                    if (response.data === 'nouser') {
                        $scope.hideAlerts();
                        $scope.showAlertNoUser = true;
                        $scope.resetInputs();
                    } else if (response.data === 'matchfalse') {
                        $scope.hideAlerts();
                        $scope.showAlertNoMatch = true;
                        $scope.resetInputs();
                    } else {
                        console.log('Login success');
                        $state.go('messages', {currentUserId: response.data});
                    }
                });
        };

    });
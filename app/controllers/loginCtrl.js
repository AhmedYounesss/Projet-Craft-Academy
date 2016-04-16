/**
 * Created by younes on 16/04/2016.
 */

app.controller("loginCtrl",function($scope,$state,$uibModal){
    $scope.login="";
    $scope.pwd="";
    $scope.connect=function(){
        if ($scope.login=="ahmed.younes@gmail.com" && $scope.pwd=="ahmed") {
            $state.go("home");
        }
        else {
            $uibModal.open({
                templateUrl:"pages/home.html",
                controller:"home",
                resolve: {
                    modal:function(){
                    },
                    items: function () {
                    }
                }
            });

        }

    }



})
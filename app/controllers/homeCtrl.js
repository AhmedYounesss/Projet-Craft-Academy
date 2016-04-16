/**
 * Created by younes on 16/04/2016.
 */
//traitement du service $resource
app.controller("homeCtrl",function($scope,$resource){
    var p= $resource('tels.json');
    $scope.tels=p.query();

})



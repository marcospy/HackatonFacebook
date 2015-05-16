/**
 * Created by bustamante on 5/16/15.
 */

angular.module('HackathonApp').controller("homeCtrl", function($scope, Ajax){
    $scope.ingredients = [];
    $scope.newIngredient = function(){
        if($scope.ingerdientModel !== undefined && $scope.ingerdientModel != '') {
            if($scope.ingredients.indexOf($scope.ingerdientModel) == -1) {
                $scope.ingredients.push({name: $scope.ingerdientModel});
            }
            $scope.ingerdientModel = ''
        }
    };

    $scope.toggleVisibility = function(index){
        $scope.ingredients[index].delete = !$scope.ingredients[index].delete;
    };

    $scope.takeOff = function(index){
        $scope.ingredients.splice(index,1);
    };

    $scope.search = function(){
        var send = {ingredients: []};
        for(var i = 0; i < $scope.ingredients.length; ++i)
            send.ingredients.push($scope.ingredients[i].name);

        if(send.ingredients.length > 0)
            Ajax.post('/list/recipe', angular.toJson(send));
    }
});

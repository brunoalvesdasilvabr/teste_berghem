var clashOfClansRank = angular.module('clashOfClansRank', [])
// CONTROLLER DO MODULE clashOfClansRank
clashOfClansRank.controller('clashOfClansRank', ['$scope', function ($scope) {
    $scope.table = false;
    $scope.loading = false;
    $scope.country = "none" //variavel que receberá o id do pais;
    //Função que receberá os dados da api
    $scope.getData = async function () {
        $scope.country
        let response = await axios('data_api/data_api.php', {
            //aqui eu passo o id do pais que veio pelo select
            params: {
                country: $scope.country
            }
        });
        //variavel de resposta do php
        $scope.rankings = response.data.items;
        console.log($scope.rankings)

    }
    // $scope.getData()


    $scope.showTable = function () {
        $scope.table = true;
    }





}])
clashOfClansRank.config(function () {

})
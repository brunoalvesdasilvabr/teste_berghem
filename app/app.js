var clashOfClansRank = angular.module('clashOfClansRank', [])
// CONTROLLER DO MODULE clashOfClansRank
clashOfClansRank.controller('clashOfClansRank', ['$scope', function ($scope) {
    $scope.table = false;
    $scope.loading = false;
    $scope.valor_selected ;//variavel que receberá o id do pais;
    //Função que receberá os dados da api
    $scope.getData = function () {
        console.log($scope.country.id)
        axios('data_api/data_api.php', {
            //aqui eu passo o id do pais que veio pelo select
            params: {
                country: $scope.country.id
            }
        }).then(function(response){
            $scope.rankings = response.data.items;
        $scope.$apply();
        console.log($scope.rankings)

        })
        //variavel de resposta do php
        

    }

    $scope.getCountry = function () {
        $scope.countries = [];
       axios('data_api/country_data.php')
       .then(function(response){
                //variavel de resposta do php 
        let data = response.data.items;

        data.forEach(function(country){
            if(country.isCountry == true){
                $scope.countries.push(country)  
            }
        })
        $scope.$apply();
       })
   
     return  $scope.countries

    }

    $scope.getCountry();

   


    $scope.showTable = function () {
        $scope.table = true;
    }





}])
clashOfClansRank.config(function () {

})
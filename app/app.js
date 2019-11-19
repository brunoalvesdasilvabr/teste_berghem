var clashOfClansRank = angular.module('clashOfClansRank',[])
// CONTROLLER DO MODULE clashOfClansRank
clashOfClansRank.controller('clashOfClansRank', ['$scope',function($scope){
  
    //Função que receberá os dados da api
     $scope.getData = async function(){
        let response = await axios('data_api/data_api.php');
        $scope.rankings =  response.data.items;
        console.log($scope.rankings)
    
    }
     $scope.getData();


    
   

}])
clashOfClansRank.config(function(){

})
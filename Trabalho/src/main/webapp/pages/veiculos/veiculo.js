module = angular.module("Prova", []);

module.controller("VeiculoController", ["$scope","$http", VeiculoController]);


function VeiculoController($scope,$http) {
    
    $scope.iniciar = funcaoIniciar;
    $scope.salvar = funcaoSalvar;
    $scope.excluir = funcaoExcluir;
    $scope.editar = funcaoEditar;
    
    $scope.veiculos = [];
    $scope.veiculo = {};
    $scope.isNovo = true;
    
    function funcaoEditar(vitima) {
        $scope.veiculo = angular.copy(vitima);
        $scope.isNovo = false;
    }

    
    function funcaoExcluir(vitima) {
        $http.delete("/veiculos/"+vitima.id).success(onSuccess).error(onError);
        
        function onSucess(data,status){
            console.log(data);
        funcaoCarregar();
        }
        function onError(data,status){
            alert("Erro:"+data);
        }
    }
    
    function funcaoSalvar() {
        if($scope.isNovo){
            http.post("/veiculos/",$scope.veiculo).sucess(onSucess).error(onError);
        }else{
            http.put("/veiculos/",$scope.veiculo).sucess(onSucess).error(onError);
        }
        function onSucess(data,status){
            console.log(data);
        funcaoCarregar();
            $scope.veiculo = {};
            $scope.isNovo = true;
        function onError(data,status){
            alert("Erro:"+data);
        }        
    }
    
    function funcaoCarregar() {
        $http.get("/veiculos").success(onSuccess).error(onError);
        
        function onSuccess(data, status) {
            $scope.veiculos = data;       
            console.log(data);
        }
        function onError(data, status) {
            alert("Deu erro: " + data);
        }
    }
    
    function funcaoIniciar() {
        console.log("->InIcIaNdO ...","mais umas","outra","mais outra");
        console.log("Loading Veiculos...");
    }
        funcaoCarregar();
        console.log(">>> veículos carregados....");
    }
        
}



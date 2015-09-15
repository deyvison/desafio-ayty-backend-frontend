var app = angular.module("Myapp", []);

app.controller('autenticacao',function ($scope, $http){

	$scope.enviarDados = function(){

		console.log("Entrou aqui");
		var jsonObj = {login: "Deyvison", senha : "112345"}
		var response = $http.post("http://localhost:8080/desafio-ayty-backend/app/consultarlogin", jsonObj);
		response.success(function(data){
			alert("Succes "+data)
		});
		response.error(function(data) {
  		alert("Error "+data);
		});
	}
});

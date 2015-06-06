document.getElementById("orange-pencil").className = "ZERO";

function answer(){
	var direction = Math.floor((Math.random() * 3) + 1);
	document.getElementById("quest").value = "";

	if(direction == 1){
		setTimeout(function() {
			var rotation = document.getElementById("orange-pencil").className = "YES";
		},1000);

		setTimeout(function() {
			var rotation = document.getElementById("orange-pencil").className = "NONE";
		},3000);
	}
	else if(direction == 2){
		setTimeout(function() {
			var rotation = document.getElementById("orange-pencil").className = "NO";
		},1000);

		setTimeout(function() {
			var rotation = document.getElementById("orange-pencil").className = "NONE";
		},3000);
	}
	else{
		setTimeout(function() {
			alert("As vezes o silencio e' a melhor resposta");
		},1000);
	}
}
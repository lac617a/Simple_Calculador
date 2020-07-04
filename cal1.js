function valor(x){
	document.getElementById('display').value += x;
}

function borrar_display(y){
	document.getElementById('display').value = y;
}

function cal_valor(){
	var resultado = eval(document.getElementById('display').value);
	document.getElementById('display').value = resultado
}
function mostrar()
{

var sexo = prompt("ingrese f ó m .");

while (sexo != "f" && sexo != "m") {

	alert("Sexo indicado no valido");

	sexo = prompt("ingrese f ó m .");

}

document.getElementById('Sexo').value = sexo;

}//FIN DE LA FUNCIÓN
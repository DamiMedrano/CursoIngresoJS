/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

var num1;
var num2;

function sumar()
{	

	num1 = parseInt(document.getElementById("numeroUno").value);
	num2 = parseInt(document.getElementById("numeroDos").value);

	alert("La suma es: " + (num1 + num2));

}

function restar()
{
	
	num1 = parseInt(document.getElementById("numeroUno").value);
	num2 = parseInt(document.getElementById("numeroDos").value);

	alert("La resta es: " + (num1 - num2));

}

function multiplicar()
{ 
	
	num1 = parseInt(document.getElementById("numeroUno").value);
	num2 = parseInt(document.getElementById("numeroDos").value);

	alert("La multiplicación es: " + (num1 * num2));

}

function dividir()
{
	
	num1 = parseInt(document.getElementById("numeroUno").value);
	num2 = parseInt(document.getElementById("numeroDos").value);

	alert("La divsión es: " + (num1 / num2));

}


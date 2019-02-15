/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/

var num1;
var num2;

function sumar()
{
	var num1;
	var num2;

	num1 = parseInt(document.getElementById("numeroUno").value);
	num2 = parseInt(document.getElementById("numeroDos").value);

	alert("La suma es: " + (num1 + num2));

}


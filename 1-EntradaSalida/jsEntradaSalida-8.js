/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/

var num1;
var num2;

function SacarResto()
{
	
	num1 = parseInt(document.getElementById("numeroDividendo").value);
	num2 = parseInt(document.getElementById("numeroDivisor").value);

	alert("El resto es: " + (num1 % num2));

}

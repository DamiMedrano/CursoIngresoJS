/*
Pedir dos números y mostrar el resultado: 
Si son iguales los muestro concatenados. 
Si el primero es mayor, los resto, 
de lo contrario los sumo. 
Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje 
"la resta es xxx y superó el 10".
*/
function mostrar()
{
	var num1;
	var num2;
	var resta;
	var suma;

	num1=prompt("Ingrese 1° numero");
	num2=prompt("Ingrese 2° numero");

	num1=parseInt(num1);
	num2=parseInt(num2);

	if(num1==num2){

		alert(num1 + " y " + num2);
	}
	else if(num1>num2){

		resta=num1-num2;
		alert("La resta es: " + resta);
	}
	else{

		suma=num1+num2;
		alert("La suma es: " + suma);
	}
}

/*
Bienvenidos (IF). 
Pedir dos números y mostrar el resultado: 
Si son iguales los muestro concatenados. 
Si el primero es mayor, los resto, 
de lo contrario los sumo. 
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje 
"la suma es xxx y supero el 10".
*/
function mostrar()
{

	var numero1;
	var numero2;
	var resultado;

	numero1=prompt("Ingrese primer numero");
	numero2=prompt("Ingrese segundo numero");

	numero1=parseInt(numero1);
	numero2=parseInt(numero2);

	if(numero1==numero2){

		alert(numero1+" y "+numero2);
	}
	if(numero1>numero2){

		resultado=numero1-numero2;
		alert("La resta es: " + resultado);
	}
	else if (numero1<numero2){
		resultado=numero1+numero2;
		alert("La suma es: " + resultado);
	}
	if(resultado>10){
		alert("El resultado es superior a 10!");
	}

}

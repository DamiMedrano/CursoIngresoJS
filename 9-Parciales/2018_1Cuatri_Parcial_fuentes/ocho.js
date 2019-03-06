/*
Bienvenidos. 
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) hasta 
que el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de números pares. 
b) La cantidad de números impares. 
c) La cantidad de ceros. 
d) El promedio de todos los números positivos ingresados. 
e) La suma de todos los números negativos. 
f) El número y la letra del máximo y el mínimo.

Testeo con los siguientes datos 
( d , -150(mal) , -50(bien)) 
( z , 0) 
( g , 20) 
( a , 150(mal) , 0(bien)) 
( b , 3) 
( k , 7)
*/

function mostrar()
{
	var letra;
	var numero;
	var contadorIngresosPositivos=0;
	var contadorPares=0;
	var contadorImpares=0;
	var contadorCeros=0;
	var sumaPositivos=0;
	var promedioPositivos;
	var sumaNegativos=0;
	var numeroMaximo;
	var numeroMinimo;
	var letraMaximo;
	var letraMinimo;
	var ingresaNumeroPPV=true;

	do{
		contadorIngresosPositivos++;

		do{
			letra=prompt("Ingrese una letra");
			letra=letra.toLowerCase();
		}while(letra != "d" && letra != "z" && letra != "g" && letra != "a" && letra != "b" && letra != "k");

		do{
			numero=prompt("Ingrese un numero");
		}while(numero<(-100) || numero>100);

		if(ingresaNumeroPPV){
			numeroMaximo=numero;
			numeroMinimo=numero;
			letraMaximo=letra;
			letraMinimo=letra;
			ingresaNumeroPPV=false;
		}
		else{

			if(numeroMaximo<numero){
				numeroMaximo=numero;
				letraMaximo=letra;
			}
			if(numeroMinimo>numero){
				numeroMinimo=numero;
				letraMinimo=letra;
			}
		}

		if(numero%2 == 0){
			contadorPares++;
		}
		else{
			contadorImpares++;
		}

		if(numero==0){
			contadorCeros++;
		}

		if(numero>=0){
			sumaPositivos=sumaPositivos+numero;
		}
		else{
			sumaNegativos=sumaNegativos-numero;
		}
		respuesta=confirm("Desea continuar?");
	}while(respuesta);

	promedioPositivos=sumaPositivos/contadorIngresosPositivos;

	document.write("<br>"+"Cantidad de numeros pares: " + contadorPares);
	document.write("<br>"+"Cantidad de numeros impares: " + contadorImpares);
	document.write("<br>"+"Cantidad de ceros: " + contadorCeros);
	document.write("<br>"+"Promedio de positivos: " + promedioPositivos);
	document.write("<br>"+"Suma de negativos: " + sumaNegativos);
	document.write("<br>"+"Numero maximo es: " + numeroMaximo + " y su letra es: " + letraMaximo);
	document.write("<br>"+"Numero minimo es: " + numeroMinimo + " y su letra es: " + letraMinimo);
}
function mostrar()
{

	var numero;
	var letra;
	var respuesta;
	var contadorPares=0;
	var contadorImpares=0;
	var contadorCeros=0;
	var promedioPositivos;
	var contadorPositivos=0;
	var sumaPositivos=0;
	var sumaNegativos=0;
	var ingresaPPV=true;
	var numeroMaximo;
	var numeroMinimo;
	var letraMaxima;
	var letraMinima;


	do{

		do{
			numero=prompt("Ingrese un numero");
			numero=parseInt(numero);

		}while(numero>100 || numero<(-100));

		do{
			letra=prompt("Ingrese 'd','z','g','a','b','k'");

		}while(letra!="d" && letra!="z" && letra!="g" && letra!="a" && letra!="b" && letra!="k");

		if(ingresaPPV){

			numeroMinimo=numero;
			numeroMaximo=numero;
			letraMinima=letra;
			letraMaxima=letra;
			ingresaPPV=false;
		}
		else{
			if(numeroMinimo>numero){
				numeroMinimo=numero;
				letraMinima=letra;
			}
			else if(numeroMaximo<numero){
				numeroMaximo=numero;
				letraMaxima=letra;
			}

		}

		if(numero%2 == 0) {

			contadorPares++;
		}
		else{
			contadorImpares++;
		}
		if(numero==0){
			contadorCeros++;
		}
		else if(numero>0){
			contadorPositivos++;
		}
		else{
			sumaNegativos=sumaNegativos-numero;
		}

		respuesta=confirm("Desea continuar?");
	}while(respuesta);

	promedioPositivos=sumaNegativos/contadorPositivos;

	document.write("Cantidad de numeros pares: " + contadorPares);
	document.write("<br>"+"Cantidad de numeros impares: " + contadorImpares);
	document.write("<br>"+"Cantidad de ceros: " + contadorCeros);
	document.write("<br>"+"Promedio positivos: " + promedioPositivos);
	document.write("<br>"+"Suma de negativos: " + contadorImpares);
	document.write("<br>"+"Numero maximo: " + numeroMaximo);
	document.write("<br>"+"Letra del maximo: " + letraMaxima);
	document.write("<br>"+"numeroMinimo: " + numeroMinimo);
	document.write("<br>"+"Letra del minimo: " + letraMinima);

}

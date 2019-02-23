function mostrar()
{

	var numero;

	var sumaNegativos=0;
	var sumaPositivos=0;
	var contPositivos=0;
	var contNegativos=0;
	var contCeros=0;
	var contNumerosPares=0;
	var promPositivos;
	var promNegativos;
	var diferencia;

	var respuesta=true;

	do {
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);


		//while(numero.isNaN()); {
		//	numero = prompt("No es un numero. Ingrese un numero");
		//	numero = parseInt(numero);

		//}


		if(numero < 0){
  			sumaNegativos = sumaNegativos + numero;
  			contNegativos++;
		}

		else{   
			if (numero > 0){ 
				sumaPositivos = sumaPositivos + numero;
	  			contPositivos++;  
  			}
  			else { 
				contCeros++; 
  			}
		}


		if(numero % 2 == 0){
			contNumerosPares++;
		}

		respuesta = confirm("¿Continuar?");

	} while (respuesta);


	promPositivos = sumaPositivos / contPositivos;

	promNegativos = sumaNegativos / contNegativos;

	diferencia = sumaPositivos - sumaNegativos;


	document.write("sumaNegativos");
	document.write(sumaPositivos);
	document.write(contPositivos);
	document.write(cantNegativos);
	document.write(cantCeros);
	document.write(cantNumerosPares);
	document.write(promPositivos);
	document.write(promNegativos);
	document.write(diferencia);




}//FIN DE LA FUNCIÓN
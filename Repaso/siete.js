function mostrar()
{

	var altura;
	var sexo;
	var contadorIngresos=0;
	var promedioAlturas;
	var acumAlturas=0;
	var alturaMasBaja;
	var sexoAlturaMasBaja;
	var ingresaPPV=true;
	var contadorMujeres190CM=0;

	while(contadorIngresos<5){
		contadorIngresos++

		do{
			altura=prompt("Ingrese su altura en centimetros");
			altura=parseInt(altura);

		}while(altura>250 || altura<0);

		do{
			sexo=prompt("Ingrese 'f' o 'm' para indicar su sexo");
			sexo=sexo.toLowerCase();

		}while(sexo!="f" && sexo!="m");

		
		if(ingresaPPV){
			alturaMasBaja=altura;
			sexoAlturaMasBaja=sexo;
			ingresaPPV=false;
		}
		else{
			if(alturaMasBaja>altura){
				alturaMasBaja=altura;
				sexoAlturaMasBaja=sexo;
			}
		}
		if(sexo=="f" && altura>190){

			contadorMujeres190CM++;
		}

		acumAlturas=acumAlturas+altura;
	}

	promedioAlturas=acumAlturas/5;

	alert("El promedio de las alturas es: " + promedioAlturas);
	alert("La altura mas baja es " + alturaMasBaja + ", y el sexo de esa persona es " + sexoAlturaMasBaja);
	alert("Cantidad de mujeres que miden mas de 1.90m: " + contadorMujeres190CM);
}

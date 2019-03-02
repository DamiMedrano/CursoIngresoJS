/*Realizar el algoritmo que permita el ingreso por prompt de las velocidades en
kilómetros (validar entre 0 y 250) , el tipo de combustible, validar el tipo “s” o “l”
para solido o liquido, de 5 vehículos de prueba ,informar por alert:
1-El promedio de las velocidades totales.
2-La velocidad más baja y el tipo de combustible de ese vehículo.
3-La cantidad de combustibles líquidos que su velocidad supere los 100
kilómetros.
4-la velocidad más alta de los de combustible sólidos*/

function mostrar()
{
	var velocidad;
	var sumaVelocidades=0;
	var promedioVelovidades;
	var velocidadMasBaja=250;
	var velocidadMaximaSolidos=0;
	var combustibleVelocidadMinima; 
	var combustible;
	var contLiquidosSobre100=0;
	var contadorAutos=0;

	while(contadorAutos<5){
		contadorAutos++;

		//VELOCIDAD:
		do{
			velocidad=prompt("Ingrese la velocidad entre 0 y 250");
			velocidad=parseInt(velocidad);
		}while(velocidad<0 || velocidad>250 && isNaN(velocidad));

		sumaVelocidades=sumaVelocidades+velocidad;
		
		//cOMBUSTIBLE:
		do{
			combustible=prompt("Ingrese “s” o “l” para solido o liquido");
		} while(combustible!="s" && combustible!="l");
		
		//PUNTO 2
		if(velocidadMasBaja>velocidad){
			velocidadMasBaja=velocidad;
			combustibleVelocidadMinima=combustible;
		}
		//PUNTO 3
		if(combustible=="l" && velocidad>100){
			contLiquidosSobre100++;
		}
		//PUNTO 4
		if(combustible=="s"){
			if(velocidadMaximaSolidos<velocidad){
				velocidadMaximaSolidos=velocidad;
			}
		}
		
	}

	promedioVelovidades=sumaVelocidades/5;

	alert("El promedio de las velocidades es: " + promedioVelovidades);

	alert("La cantidad de vehiculos de combustible liquido que superaron a 100km/h: " + contLiquidosSobre100);

	alert("Velocidad más baja fue: " + velocidadMasBaja + " y el combustible fue: " + combustibleVelocidadMinima);

	alert("La velocidad mas alta de los solidos fue: " + velocidadMaximaSolidos);

}

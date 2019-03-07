function mostrar()
{

	var pais;
	var habitantes;
	var temperatura;
	var respuesta;
	var temperaturasPares=0;
	var habitantesPaisConMenosHabitantes;
	var paisConMenosHabitantes;
	var contadorPaisesSup40=0;
	var contadorIngresos=0
	var ingresaPPV=true;
	var sumaHabitantes=0;
	var promedioDeHabitantes;
	var temperaturaMinima;
	var paisTempMinima;

	do{
		contadorIngresos++;

		pais=prompt("Ingrese nombre de un pais");

		do{
			habitantes=prompt("Ingrese la cantidad de habitantes");
			habitantes=parseInt(habitantes);
		}while(habitantes>7000 || habitantes<1);

		do{
			temperatura=prompt("Ingrese la temperatura");
			temperatura=parseInt(temperatura);
		}while(temperatura>50 || temperatura<(-50));

		if(ingresaPPV){
			paisTempMinima=pais;
			paisConMenosHabitantes=pais;
			habitantesPaisConMenosHabitantes=habitantes;
			temperaturaMinima=temperatura;
			ingresaPPV=false;
		}
		else{

			if(temperaturaMinima>temperatura){

			paisTempMinima=pais;
			temperaturaMinima=temperatura;
			}
			if(habitantesPaisConMenosHabitantes>habitantes){
				paisConMenosHabitantes=pais;
				habitantesPaisConMenosHabitantes=habitantes;
			}

		}
		if(temperatura%2==0){

		temperaturasPares++;
		}
		
		if(temperatura>40){
			contadorPaisesSup40++;
		}

		sumaHabitantes=sumaHabitantes+habitantes;

		respuesta=confirm("desea continuar?");
	}while(respuesta)

	promedioDeHabitantes=sumaHabitantes/contadorIngresos;

	document.write("Cantidad temperaturas pares: " + temperaturasPares);
	document.write("<br>"+"Pais con menos habitantes: " + paisConMenosHabitantes);
	document.write("<br>"+"Cantidad paises con temperaturas mayores a 40: " + contadorPaisesSup40);
	document.write("<br>"+"Promedio habitantes de todos los paises: " + promedioDeHabitantes);
	document.write("<br>"+"Temperatura Minima: " + temperaturaMinima);
	document.write("<br>"+"Pais que registro la temperatura minima: " + paisTempMinima);

}
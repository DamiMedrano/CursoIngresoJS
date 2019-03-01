/*
Bienvenidos. 
Realizar el algoritmo que permita el ingreso por prompt de las notas 
(validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, 
informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
*/
function mostrar()
{
	var contadorAlumnos=0;
	var nota;
	var sumaNotas;
	var promedio;
	var sexo:
	var notaMasBaja=10;
	var sexoNotaMasBaja;

	while(contadorAlumnos<5){

		contadorAlumnos++;

		//NOTA
		nota=prompt("Ingrese su nota");
		nota=parseInt(nota);

		if(nota<0 || nota>10){
			nota=prompt("Nota invalida. Ingrese su nota del 0 al 10");
		}
		if(nota<notaMasBaja){
			notaMasBaja=nota;
		}

		//SEXO
		sexo=prompt("Ingrese su genero");
		sexo.toLowerCase();

		if(sexo != "f" && sexo != "m"){
			sexo=prompt("Sexo no valido. Ingrese un genero");
		}
		else{
			if()
		}






	}

	promedio=sumaNotas/contadorAlumnos;

}

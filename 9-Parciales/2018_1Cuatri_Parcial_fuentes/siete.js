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
	var contIngresos=0;
	var nota;
	var sumaNotas=0;
	var promedio;
	var sexo;
	var notaMasBaja=10;
	var sexoNotaMasBaja;
	var contVaronesAprobados=0;

	do{

		contIngresos++;

		//NOTA
		do{
			nota=prompt("Ingrese su nota");
			nota=parseInt(nota);

		}while(nota<0 || nota>10 || isNaN(nota));

		sumaNotas+=nota;

		//SEXO
		do{
			sexo=prompt("Ingrese su genero");
			sexo.toLowerCase();

		}while(sexo != "f" && sexo != "m")

		if(nota<notaMasBaja){
			notaMasBaja=nota;
			sexoNotaMasBaja=sexo;
		}
		if(nota>=6 && sexo=="m"){
			contVaronesAprobados++;
		}
	}while(contIngresos<5);


	promedio=sumaNotas/5;

	alert("Promedio de las notas: " + promedio);
	alert("La nota mas baja fue : " + notaMasBaja + ", y el sexo fue: " + sexoNotaMasBaja);
	alert("Cantidad de varones con nota mayor o igual a 6: " + contVaronesAprobados);
}

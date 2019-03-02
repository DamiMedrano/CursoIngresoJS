/*
Realizar el algoritmo que permita iterar el ingreso de dos datos, un país y la
superficie de su territorio (validar) hasta que el usuario quiera e informar al terminar
el ingreso por document.write:
1-La cantidad de países con superficie impar.
2-La cantidad de países con superficie menor a 100
3-La cantidad de países con superficie igual a 100
4-El nombre del primer país que superó los 100 de superficie
5-El promedio de kilómetros ingresados.
6-El nombre del que menos territorio tiene.
*/

function mostrar()
{
	var pais;
	var paisMenorSup;
	var supPaisMenorSup;
	var contSupImpar=0;
	var contSupMenor100=0;
	var contSupMayor100=0;
	var primeraVezMayor;
	var primeraVezMenor;
	var primerPaisSupMayor100;
	var superficie;
	var promedioSup;
	var sumaSup=0;

	var respuesta;

	do{
		
		pais=prompt("Ingrese el nombre del País");

		do{
			superficie=prompt("Ingrese el nombre del País");
		}while(superficie.isNaN());

		superficie=parseInt(superficie);

		sumaSup+=superficie;

		if(superficie%2==1){
			contSupImpar++;
		}
		else{
			if(superficie>100){
				contSupMayor100++;
				if(primeraVezMayor){
					primerPaisSupMayor100=pais;
					primeraVezMayor=false;
				}
			}
			else{
				contSupMenor100++;
				if(primeraVezMenor){
					paisMenorSup=pais;
					supPaisMenorSup=superficie;
					primeraVezMenor=false;
				}
				if(supPaisMenorSup>superficie){
					supPaisMenorSup=superficie;
					paisMenorSup=pais;
				}
			}
		}

		respuesta = confirm("seguir?");
	}while(respuesta);

	document.write( " país/es con superficie impar ")

}

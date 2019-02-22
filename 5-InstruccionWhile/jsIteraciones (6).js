function mostrar()
{

	var contador=1;
	var acumulador=0;
	var sumador;


	sumador = prompt("Ingrese " + contador + "° numero");
	sumador = parseInt(sumador);
	contador++;

	acumulador = acumulador + sumador;

	while (contador <=5) {

		sumador = prompt("Ingrese " + contador + "° numero");
		sumador = parseInt(sumador);
		contador++;

		acumulador = acumulador + sumador;

    }



document.getElementById('suma').value = acumulador;
document.getElementById('promedio').value = acumulador/5;

}//FIN DE LA FUNCIÓN
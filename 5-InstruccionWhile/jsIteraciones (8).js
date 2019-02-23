function mostrar()
{

	var sumaPositivos=0;
	var multiplicacionNegativos=1;
	var numero;
	var respuesta;

	respuesta = prompt("¿Desea comenzar?");
	respuesta = respuesta.toLowerCase();

	do {

		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);

		if (numero >=0){

			sumaPositivos = sumaPositivos + numero;
			
		}
		else {

			multiplicacionNegativos = multiplicacionNegativos * numero;
		}

		respuesta = prompt("numero ingresado con exito, ¿desea seguir agregando numeros?");
		respuesta = respuesta.toLowerCase();

	} while (respuesta == "si");


document.getElementById('suma').value=sumaPositivos;
document.getElementById('producto').value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN
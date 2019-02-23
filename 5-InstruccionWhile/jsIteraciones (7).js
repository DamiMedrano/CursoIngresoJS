function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si";
	var sumador;


    sumador = prompt("Ingrese un numero");
    sumador = parseInt(sumador);
	contador++;

    acumulador = acumulador + sumador;

	respuesta = prompt("Numero ingresado con exito, son " + contador + " numeros, ¿desea añadir otro?")
	respuesta = respuesta.toLowerCase();


	do { 

		sumador = prompt("Ingrese un numero");
		sumador = parseInt(sumador);
		contador++;

        acumulador = acumulador + sumador;

		respuesta = prompt("Numero ingresado con exito, son " + contador + " numeros, ¿desea añadir otro?")
		respuesta = respuesta.toLowerCase();

    } while (respuesta == "si")


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
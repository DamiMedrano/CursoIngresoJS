function mostrar()
{

	var numero;
	var numeroMaximo=0;
	var numeroMinimo=0;
    var primeraVez=true;
	
	var respuesta='si';

	do {

    	numero = prompt("Ingrese un numero");
    	numero = parseInt(numero);

        if(primeraVez){

            primeraVez=false;
            numeroMaximo = numero;
            numeroMinimo = numero;
        }
        else{

            if(numero > numeroMaximo){

                numeroMaximo = numero;
            }

            else if (numero < numeroMinimo) {

                numeroMinimo = numero;
            }

        }

        respuesta = prompt("¿Desea continuar ingresando numeros?");
        respuesta = respuesta.toLowerCase();
    	

	} while (respuesta == "si");

	document.getElementById('maximo').value=numeroMaximo;
	document.getElementById('minimo').value=numeroMinimo;




}//FIN DE LA FUNCIÓN
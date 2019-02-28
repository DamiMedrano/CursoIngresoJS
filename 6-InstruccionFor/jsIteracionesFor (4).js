function mostrar()
{

	var repeticiones = prompt("Ingrese hasta cuando repetir");
		repeticiones = parseInt(repeticiones);
	var	contadorRepeticiones = 0;

	for( ; contadorRepeticiones!=repeticiones; contadorRepeticiones++){

  		if (contadorRepeticiones===repeticiones) {break;}

	  	console.log(contadorRepeticiones);

	}


}//FIN DE LA FUNCIÓN
var numero;

function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	numero = Math.floor(Math.random() * 11);

	if (numero >= 9) {

		alert(numero + ", EXCELENTE");
	}
	else if (numero <= 3) {

		alert(numero + ", vamos, la proxima se puede");
	}
	else {

		alert(numero + ", APROBÓ");
	}
	

}//FIN DE LA FUNCIÓN
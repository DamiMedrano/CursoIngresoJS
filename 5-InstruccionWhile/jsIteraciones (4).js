function mostrar()
{

	var num;

	num = prompt("ingrese un número entre 0 y 9.");

	do while (!(num > 0 && num < 9)) {

		alert("No es un numero entre 0 y 9, intente nuevamente");

		prompt("ingrese un número entre 0 y 9.");

	}

	document.getElementById("Numero").value = num;


}//FIN DE LA FUNCIÓN
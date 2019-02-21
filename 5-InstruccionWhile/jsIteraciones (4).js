function mostrar()
{

var num;

num = prompt("Ingrese un número entre 0 y 9.");
num = parseInt(num);


while (num <= 0 || num >= 9) {
	num = prompt("Numero incorrecto, intente Nuevamente. Ingrese un número entre 0 y 9.");

	if (isNaN(num)) {
	num = prompt("No es un numero, intente Nuevamente. Ingrese un número entre 0 y 9.");

    }

}


document.getElementById("Numero").value = num;


}//FIN DE LA FUNCIÓN
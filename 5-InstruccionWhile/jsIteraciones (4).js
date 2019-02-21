function mostrar()
{

var num;

num = prompt("ingrese un número entre 0 y 9.");
num = parseInt(num);

	while (!(num > 0 && num < 9)){

		if (num > 0 && num < 9){

			document.getElementById("Numero").value = num;

		}

		else {

			alert("No es un numero entre 0 y 9, intente nuevamente");

		    prompt("ingrese un número entre 0 y 9.");
		}

	}


}//FIN DE LA FUNCIÓN
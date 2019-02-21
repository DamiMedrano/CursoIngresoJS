function mostrar()
{

var clave;
var intentos=0;

    clave = prompt("Ingrese su clave");
    intentos ++;

	while (clave != "utn750" && intentos < 3){

		alert("Clave incorrecta. Intente de nuevo.");

		clave = prompt("Ingrese su clave");
   		intentos ++;

   		if (clave == "utn750" && intentos <=3) {

   			alert("Bienvenido.");

   		}

   		if (intentos == 3 && clave != "utn750"){
   			alert("Intentos agotados.");
   	

   		}

		
    }






}//FIN DE LA FUNCIÓN

/*
Bienvenidos (SWITCH). 
pedir el ingreso de un planeta del sistema solar 
Si es la tierra mostrar "acá vivimos". 
Si está más cerca del sol, "acá hace más calor". 
Si está más lejos del sol, "acá hace más frio". 
Si no es un planeta valido informarlo. 
Aclaración: los planetas se ingresan en minúscula (Mercurio 
y Venus están antes que la tierra).
*/

function mostrar()
{
	var planeta;

	planeta=prompt("Ingrese el nombre del planeta:");
	planeta=planeta.toLowerCase();

	switch(planeta){

		case "tierra":
		alert("Acá vivimos");
		break;

		case "venus":
		case "mercurio":
		alert("Acá hace más calor.");
		break;

		case "marte":
		case "jupiter":
		case "saturno":
		case "urano":
		case "neptuno":
		case "pluton":
		alert("Acá hace más frio.");
		break;

		default:
		alert("No es un planeta valido.");

	}

}

var edad;
var estadoCiv;

function mostrar()
{

	edad = parseInt(document.getElementById("edad").value);
	estadoCiv = document.getElementById("estadoCivil").value;

	if (edad < 18 && estadoCivil !== "Soltero") {

		alert("Es muy pequeño para NO ser soltero.")

	}
	


}//FIN DE LA FUNCIÓN
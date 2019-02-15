/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

var sueldo;

function mostrarAumento()
{

	sueldo = parseInt(document.getElementById("sueldo").value);

	sueldo = (sueldo * 10) / 100 + sueldo;

	document.getElementById("resultado").value = sueldo;


	
}

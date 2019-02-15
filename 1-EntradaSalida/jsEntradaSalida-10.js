/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/

var importe;
var descuento;

function mostrarAumento()
{

	importe = parseInt(document.getElementById("importe").value);

	descuento = (importe * 25) / 100;

	importe = importe - descuento;

	document.getElementById("resultado").value = importe;

}
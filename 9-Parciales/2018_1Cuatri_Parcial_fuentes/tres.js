/*
Pedir por prompt el precio y el porcentaje de descuento,
mostrar el precio final con descuento por id.
*/
function mostrar()
{

	var precio;
	var descuentoPorcentual;
	var final;

	precio=prompt("Ingrese el precio");
	descuento=prompt("Ingrese el descuento");

	precio=parseInt(precio);
	descuento=parseInt(descuento);

	descuento=(precio*descuento)/100;
	final=precio-descuento;

	document.getElementById("elPrecioFinal").value = final;


}

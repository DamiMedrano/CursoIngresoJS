function mostrar()
{
	var precio;
	var descuento;
	var final;

	precio = prompt("Ingrse el precio:");
	descuento = prompt("Ingrse el porcentaje de descuento:");

	precio = parseInt(precio);
	descuento = parseInt(descuento);

	descuento = (precio*descuento)/100;

	final = precio - descuento;

	document.getElementById("elPrecioFinal").value = final;



}

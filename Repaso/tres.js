function mostrar()
{

	var importe;
	var descuento;
	var final;

	importe=prompt("Ingrese el importe");
	descuento=prompt("Ingrese el descuento");

	descuento=importe*descuento/100;
	final=importe-descuento;

	document.getElementById("elPrecioFinal").value=final;

}

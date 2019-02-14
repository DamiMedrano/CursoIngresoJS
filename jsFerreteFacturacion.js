/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

var producto1;
var producto2;
var producto3;
var suma;
var promedio;
var iva;
var precioFinal;

	producto1 = document.getElementById("precioUno");
	producto2 = document.getElementById("precioDos");
	producto3 = document.getElementById("precioTres");

	suma = parseInt(suma);
	promedio = parseInt(promedio);
	promedio = parseInt(promedio);

function Sumar () 
{
	suma = producto1 + producto2 + producto3;
	suma = parseInt(suma);
	alert("Suma total: $" + suma);
}
function Promedio () 
{
	promedio = suma / 3;
	alert("Promedio: $" + suma);
}
function PrecioFinal () 
{
	iva = (suma*21)/100;
	precioFinal = suma + iva;
	alert("Precio final +IVA: $" + suma);
}


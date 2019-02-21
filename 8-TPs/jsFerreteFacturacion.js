/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

var precio1;
var precio2;
var precio3;
var suma;
var promedio;
var final;

function Sumar () 
{
	precio1 = parseInt(document.getElementById("PrecioUno").value);
	precio2 = parseInt(document.getElementById("PrecioDos").value);
	precio3 = parseInt(document.getElementById("PrecioTres").value);

    suma = precio1 + precio2 + precio3;
    alert("La suma es: " + suma);

}

function Promedio () 
{
	precio1 = parseInt(document.getElementById("PrecioUno").value);
	precio2 = parseInt(document.getElementById("PrecioDos").value);
	precio3 = parseInt(document.getElementById("PrecioTres").value);

	suma = precio1 + precio2 + precio3;
	promedio = suma / 3;
	alert("El promedio es: " + promedio);

}

function PrecioFinal () 
{
	precio1 = parseInt(document.getElementById("PrecioUno").value);
	precio2 = parseInt(document.getElementById("PrecioDos").value);
	precio3 = parseInt(document.getElementById("PrecioTres").value);

	suma = precio1 + precio2 + precio3;
	final = suma * 1.21;
	alert("El precio final es: " + final);

}
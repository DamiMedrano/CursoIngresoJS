/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

function Sumar () 
{

    //Variables
    var precioUno;
    var precioDos;
    var precioTres;
    var sumaTotalPrecios;

    //Ingreso de datos
    precioUno = parseInt(document.getElementById("PrecioUno").value);
    precioDos = parseInt(document.getElementById("PrecioDos").value);
    precioTres = parseInt(document.getElementById("PrecioTres").value);	


    //Proceso
    sumaTotalPrecios = precioUno + precioDos + precioTres;

    //Salida de datos
    alert("La suma: " + sumaTotalPrecios);
}

function Promedio () 
{

	//Variables
    var precioUno;
    var precioDos;
    var precioTres;
    var sumaTotalPrecios;
    var promedio;

    //Ingreso de datos
    precioUno = parseInt(document.getElementById("PrecioUno").value);
    precioDos = parseInt(document.getElementById("PrecioDos").value);
    precioTres = parseInt(document.getElementById("PrecioTres").value);	

    //Proceso
    sumaTotalPrecios = precioUno + precioDos + precioTres;
    promedio = sumaTotalPrecios / 3;

    //Salida de datos
    alert("El promedio es: " + promedio);

}

function PrecioFinal () 
{

	//Variables
    var precioUno;
    var precioDos;
    var precioTres;
    var sumaTotalPrecios;
    var sumaTotalPreciosIVA;

    //Ingreso de datos
    precioUno = parseInt(document.getElementById("PrecioUno").value);
    precioDos = parseInt(document.getElementById("PrecioDos").value);
    precioTres = parseInt(document.getElementById("PrecioTres").value);	

    //Proceso
    sumaTotalPrecios = precioUno + precioDos + precioTres;
    sumaTotalPreciosIVA = sumaTotalPrecios * 1.21;

    //Salida de datos
    alert("El precio final es: " + sumaTotalPreciosIVA + ", esto incluye IVA(21%)");

}
/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de
 otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento
 del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas”
 se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar
 del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{

    var precio = 35

    var cantidad = document.getElementById("Cantidad").value;
    cantidad = parseInt(cantidad);

    var marca = document.getElementById("Marca").value;

    var final = cantidad * precio;

    var iibb;

    //Ejercicio A
    if (cantidad >= 6){
    	final = final * 0.5;

    }
    //Ejercicio B
    else if (cantidad == 5){

    	if (marca == "ArgentinaLuz"){
    		final = final * 0.6; 

    	}
    	else {
    		final = final *0.7;
    	}

    }
    //Ejercicio C
    else if (cantidad == 4){

    	if (marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
    		final = final * 0.75;

    	}
    	else {
    		final = final * 0.8;
    	}
    //Ejercicio D
    }
    else if (cantidad == 3){

    	if (marca == "ArgentinaLuz"){
    		final = final * 0.85; 
    	}
    	else if (marca == "FelipeLamparas"){
    		final = final * 0.9;
    	}
    	else {
    		final = final * 0.95;
    	}
    //Y si no hay descuentos
    }
    else{
    	precio = precio;
    }

    // IIBB
    if(final >= 120){

    	iibb = final * 1.1 / 100;
    	final = final + iibb;
    	alert("Usted pago $" + iibb + " de IIBB");
    }

    document.getElementById("precioDescuento").value = final;


}


/*var cantidadDeLamparas;                             /////INTENTO 1
	var descuento;
	var marca;
	var IIBB;
	var precioConDescuento;
	var precioDeLamparas = 35;

    cantidadDeLamparas = parseInt(document.getElementById("Cantidad").value);
	marca = document.getElementById("Marca").value;


	switch (marca){

		case "ArgentinaLuz": 

			if(cantidadDeLamparas >= 6) {
				descuento = 0.5; //50%
			}
			if(cantidadDeLamparas == 5) {
				descuento = 0.6; //40%
			}
			if(cantidadDeLamparas == 4) {
				descuento = 0.75; //25%
			}
			if(cantidadDeLamparas == 3) {
				descuento = 0.85; //15%
			}
			else {
				descuento = 1; //0%
			}

		    precioDeLamparas = precioDeLamparas * cantidadDeLamparas;
		    precioConDescuento = precioDeLamparas * descuento;

		    if (precioConDescuento > 120){

		    	IIBB = precioConDescuento * 0.1;
		    	precioConDescuento = precioConDescuento + IIBB;
		    	document.getElementById("precioDescuento").value = precioConDescuento;
		    	alert("Usted pago $" + IIBB + " de IIBB");
		    }

		    else{

		    	document.getElementById("precioDescuento").value = precioConDescuento;
		    }
        
        break;

       
	
    }
                     //////Intento 2

				    var cantidadDeItems;
				    var contadorDeItems;
				    var marca;
				    var porcentajeDeDescuento;
				    var descuentoAplicado;
				    var precioFinal;
				    var IIBB;

				    cantidadDeItems = document.getElementById("Cantidad").value;
				    cantidadDeItems = parseInt(cantidadDeItems)

				    marca = document.getElementById("Marca").value;

				    switch (marca) {

				    	case "ArgentinaLuz":

				    	    if(cantidad )
				    }
*/
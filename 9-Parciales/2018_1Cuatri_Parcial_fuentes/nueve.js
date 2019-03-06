/*
Bienvenidos. 
Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar), 
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de temperaturas pares. 
b) La marca del producto más pesado 
c) La cantidad de productos que se conservan a menos de 0 grados. 
d) El promedio del peso de todos los productos.	
f) El peso máximo y el mínimo.

Testeo con los siguientes valores 
(m=pepito;p = 50; t =-300(mal) ,-30(bien) ) 
(m=teem;p = 10; t =0 ) 
(m=llut;p = 150(mal), 15(bien); t =-13 ) 
(m=fpy;p = 45; t =-12 )
*/

function mostrar()
{

	var marca;
	var marcaProductoMasPesado;
	var peso;
	var promedioPesos;
	var pesoMaximo;
	var pesoMinimo;
	var acumuladorPesos=0;
	var contadorIngresos=0;
	var temperatura;
	var cantTempPares=0;
	var cantTempMenoresACero=0;
	var respuesta;
	var IngresaPesoPPV=true;

	do{
		contadorIngresos++;

		do{
			marca=prompt("Ingrese la marca del producto");
			marca=marca.toLowerCase();
		}while(marca!="pepito" && marca!="teem" && marca!="llut" && marca!="fpy");

		do{
			peso=prompt("Ingrese el peso del producto");
			peso=parseInt(peso);
		}while(peso>100 || peso<1);

		acumuladorPesos=acumuladorPesos+peso;

		if(IngresaPesoPPV){
			pesoMaximo=peso;
			pesoMinimo=peso;
			IngresaPesoPPV=false;
			marcaProductoMasPesado=marca;
		}
		else{

			if(pesoMaximo<peso){
			pesoMaximo=peso;
			marcaProductoMasPesado=marca;
			}
			if(pesoMinimo>peso){
			pesoMinimo=peso;
			}
		}
		
		do{
			temperatura=prompt("Ingrese la temperatura de almacenamiento");
			temperatura=parseInt(temperatura);
		}while(temperatura<(-30) || temperatura>30);

		if(temperatura%2==0){
			cantTempPares++;
		}
		if(temperatura<0){
			cantTempMenoresACero++;
		}

		respuesta=confirm("Desea continuar?");
	}while(respuesta);

	promedioPesos=acumuladorPesos/contadorIngresos;

	document.write("Temperaturas pares: " + cantTempPares);
	document.write("<br>"+"Marca del producto más pesado: " + marcaProductoMasPesado);
	document.write("<br>"+"Cantidad de productos que se conservan a menos de 0 grados: " + cantTempMenoresACero);
	document.write("<br>"+"Promedio de pesos: " + promedioPesos);
	document.write("<br>"+"El peso maximo fue : " + pesoMaximo +". El peso maximo fue : " + pesoMinimo);
}

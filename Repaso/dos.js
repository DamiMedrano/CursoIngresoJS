function mostrar()
{

	var nombre1;
	var nombre2;
	var peso1;
	var peso2;
	var sumakilos;
	var promediokilos;

	nombre1=prompt("Ingrese su nombre");
	nombre2=prompt("Ingrese el nombre de su pareja");

	peso1=prompt("Ingrese su peso");
	peso2=prompt("Ingrese el peso de su pareja");

	peso1=parseInt(peso1);
	peso2=parseInt(peso2);

	sumakilos=peso1+peso2;

	promediokilos=sumakilos/2;

	alert("Ustedes se llaman " + nombre1 + " y " + nombre2 + ", pesan " + peso1 + " y " + peso2 + " kilos, que sumados son " + sumakilos + " kilos y el promedio de peso es " + promediokilos);
  
}

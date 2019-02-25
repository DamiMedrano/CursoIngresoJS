/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{

	var edad;
	var sexo;
	var estadoCivil;
	var sueldo;
	var numeroLegajo;
	var nacionalidad;


		//EDAD:

		edad = prompt("Ingrese su edad:");
		edad = parseInt(edad);
        
		if (Number.isNaN(edad)){

			do{
				edad = prompt("Dato ingresado no valido. Ingrese su edad:");
				edad = parseInt(edad);
			}while(Number.isNaN(edad));

		}
		if (edad>90 || edad<18){

			do { 
			edad = prompt("Edad ingresada tiene que estar entre 18-90. Ingrese su edad:");
			edad = parseInt(edad);
			} while (edad>90 && edad<18);
		}
		else{
			edad = edad;
		}

		//SEXO:

		sexo = prompt("Indique su sexo, escriba f(femenino) o m(masculino):")
		sexo = sexo.toLowerCase();

		if (sexo!="m" && sexo!="f"){
			do { 
			sexo = prompt("Sexo indicado no valido, escriba f(femenino) o m(masculino):");
			sexo = sexo.toLowerCase();
			} while (sexo!="m" && sexo!="f");
		}
		else{

			if (sexo == "m"){
			sexo = "Masculino";
			}
			else{
				sexo = "Femenino";
			}
		}

		//ESTADO CIVIL:

		estadoCivil = prompt("Indique su estado civil ingresando 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos")
		estadoCivil = parseInt(estadoCivil);

		if (estadoCivil>4 || estadoCivil<1){
			do { 
			estadoCivil = prompt("Caracter invalido. Ingrese 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
			estadoCivil = parseInt(estadoCivil);
			} while (estadoCivil>4 || estadoCivil<1);
		}
		else{
			if (estadoCivil == 1){
			estadoCivil = "Soltero";
			}
			else if (estadoCivil == 2){
				estadoCivil = "Casado";
			}
			else if (estadoCivil == 3){
				estadoCivil = "Divorciado";
			}
			else{
				estadoCivil = "Viudo";
			}
		}

		//SUELDO BRUTO:

		sueldo = prompt("Ingrese su sueldo bruto:");
		sueldo = parseInt(sueldo);

		if(Number.isNaN(sueldo)){
			do { 
			sueldo = prompt("No se aceptan caracteres no numericos. Ingrese su sueldo bruto:");
			sueldo = parseInt(sueldo);
			} while (Number.isNaN(sueldo));
		}
		else if(sueldo<8000){
			do { 
			sueldo = prompt("El sueldo bruto no puede ser menor a $8000, ingrese su sueldo bruto:");
			sueldo = parseInt(sueldo);
			} while (sueldo<8000);	
		}
		else{
			sueldo = sueldo;
		}

		//NUMERO DE LEGAJO:

		numeroLegajo = prompt("Ingrese su numero de legajo(4 digitos)");
		numeroLegajo = parseInt(numeroLegajo);

		if(Number.isNaN(numeroLegajo)){
			do { 
			numeroLegajo = prompt("Caracteres invalidos. Ingrese su numero de legajo:");
			numeroLegajo = parseInt(numeroLegajo);
			} while (Number.isNaN(numeroLegajo));
		}
		if (numeroLegajo<1000 || numeroLegajo <9999){
			do { 
			numeroLegajo = prompt("Caracteres invalidos. Ingrese su numero de legajo:");
			numeroLegajo = parseInt(numeroLegajo);
			} while (numeroLegajo<1000 || numeroLegajo <9999);
		}
		else{
			numeroLegajo=numeroLegajo;
		}

		//NACIONALIDAD:

		nacionalidad = prompt("Indique su nacionalidad, A-para argentinos, E-para extranjeros, N-para nacionalizados:")
		nacionalidad = nacionalidad.toLowerCase();

		if (nacionalidad!="a" && nacionalidad!="e" && nacionalidad!="n"){
			do { 
			nacionalidad = prompt("Indique su nacionalidad, A-para argentinos, E-para extranjeros, N-para nacionalizados:")
			nacionalidad = nacionalidad.toLowerCase();
			} while (nacionalidad!="a" && nacionalidad!="e" && nacionalidad!="n");
		}

		else{
			if (nacionalidad == "a"){
			nacionalidad = "Argentina";
			}
			else if (nacionalidad == "e"){
				nacionalidad = "Extranjero";
			}
			else{
				nacionalidad = "Nacionalizado";
			}
		}

		document.getElementById("Edad").value = edad;
		document.getElementById("Sexo").value = sexo;
		document.getElementById("EstadoCivil").value = estadoCivil;
		document.getElementById("Sueldo").value = "$" + sueldo;
		document.getElementById("Legajo").value = numeroLegajo;
		document.getElementById("Nacionalidad").value = nacionalidad;


 
}

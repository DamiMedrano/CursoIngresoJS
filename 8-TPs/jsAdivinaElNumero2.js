/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos=0;
var numeroAdivinado;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto = Math.floor(Math.random() * 101);

	//PARA VERIFICAR:
	alert(numeroSecreto);
}

function verificar()
{
	numeroAdivinado=document.getElementById("numero").value;

	if (numeroAdivinado == numeroSecreto){

		contadorIntentos++;

		if(contadorIntentos==1){
			alert("Correcto! " + contadorIntentos + " intento. Usted es un Psíquico!");
			document.getElementById("intentos").value = contadorIntentos;
		}
		if(contadorIntentos==2){
			alert("Correcto! " + contadorIntentos + " intentos. Excelente percepción!");
			document.getElementById("intentos").value = contadorIntentos;
		}
		if(contadorIntentos==3){
			alert("Correcto! " + contadorIntentos + " intentos. Esto es suerte!");
			document.getElementById("intentos").value = contadorIntentos;
		}
		if(contadorIntentos==4){
			alert("Correcto! " + contadorIntentos + " intentos. Excelente técnica!");
			document.getElementById("intentos").value = contadorIntentos;
		}
		if(contadorIntentos==5){
			alert("Correcto! " + contadorIntentos + " intentos. Usted está en la media.");
			document.getElementById("intentos").value = contadorIntentos;
		}
		if(contadorIntentos>=6 && contadorIntentos<=10){
			alert("Correcto! " + contadorIntentos + " intentos. Falta técnica.");
			document.getElementById("intentos").value = contadorIntentos;
		}
		else if(contadorIntentos>10){
			alert("Correcto! " + contadorIntentos + " intentos. Afortunado en el amor!!.");
			document.getElementById("intentos").value = contadorIntentos;
		}
	}
	else{
		contadorIntentos++;
		alert("Ese numero no es.");
	}	
}
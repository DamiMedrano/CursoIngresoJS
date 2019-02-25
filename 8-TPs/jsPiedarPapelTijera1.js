/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var eleccionPersona;
var seguir;

function comenzar()
{

	eleccionMaquina = Math.floor(Math.random() * 3 +1);

	//DESCOMENTAR PARA VERIFICAR:
	//alert(eleccionMaquina);

}//FIN DE LA FUNCIÓN
function piedra()
{
	if(eleccionMaquina==1){
		alert("Empate! Ambos elijieron 'piedra'");
	}
	if(eleccionMaquina==2){
		alert("Usted perdió. 'papel' le gana a 'piedra'");
	}
	if(eleccionMaquina==3){
		alert("Usted ganó! 'piedra' le gana a 'tijeras'");
	}

	seguir = confirm("¿Desea seguir jugando?")
		if(seguir){
			eleccionMaquina = Math.floor(Math.random() * 3 +1);
		}	



}//FIN DE LA FUNCIÓN
function papel()
{

	if(eleccionMaquina==1){
		alert("Usted ganó! 'papel' le gana a 'piedra'");
	}
	if(eleccionMaquina==2){
		alert("Empate! Ambos elijieron 'pepel'");
	}
	if(eleccionMaquina==3){
		alert("Usted perdió. 'tijera' le gana a 'papel'");
	}

	seguir = confirm("¿Desea seguir jugando?")
  		if(seguir){
			eleccionMaquina = Math.floor(Math.random() * 3 +1);
		}	


}//FIN DE LA FUNCIÓN
function tijera()
{
	if(eleccionMaquina==1){
		alert("Usted perdió. 'piedra' le gana a 'tijera'");
	}
	if(eleccionMaquina==2){
		alert("Usted ganó! 'tijera' le gana a 'papel'");
	}
	if(eleccionMaquina==3){
		alert("Empate! Ambos elijieron 'tijera'");
	}

	seguir = confirm("¿Desea seguir jugando?")
		if(seguir){
			eleccionMaquina = Math.floor(Math.random() * 3 +1);
		}	


}//FIN DE LA FUNCIÓN
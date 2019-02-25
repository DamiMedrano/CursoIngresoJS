var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;
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
		ContadorDeEmpates++; 
	}
	if(eleccionMaquina==2){
		alert("Usted perdió. 'papel' le gana a 'piedra'");
		ContadorDePerdidas++;
	}
	if(eleccionMaquina==3){
		alert("Usted ganó! 'piedra' le gana a 'tijeras'");
		ContadorDeGanadas++;
	}

	seguir = confirm("¿Desea seguir jugando?");
		if(seguir){
			eleccionMaquina = Math.floor(Math.random() * 3 +1);
		}	



}//FIN DE LA FUNCIÓN
function papel()
{

	if(eleccionMaquina==1){
		alert("Usted ganó! 'papel' le gana a 'piedra'");
		ContadorDeGanadas++;
	}
	if(eleccionMaquina==2){
		alert("Empate! Ambos elijieron 'pepel'");
		ContadorDeEmpates++;
	}
	if(eleccionMaquina==3){
		alert("Usted perdió. 'tijera' le gana a 'papel'");
		ContadorDePerdidas++;
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
		ContadorDePerdidas++;
	}
	if(eleccionMaquina==2){
		alert("Usted ganó! 'tijera' le gana a 'papel'");
		ContadorDeGanadas++;
	}
	if(eleccionMaquina==3){
		alert("Empate! Ambos elijieron 'tijera'");
		ContadorDeEmpates++;
	}

	seguir = confirm("¿Desea seguir jugando?")
		if(seguir){
			eleccionMaquina = Math.floor(Math.random() * 3 +1);
		}	
}

if(seguir=false){

	document.getElementById("ganadas").value = ContadorDeGanadas;
	document.getElementById("perdidas").value = ContadorDePerdidas;
	document.getElementById("empatadas").value = ContadorDeEmpates;

}


//FIN DE LA FUNCIÓN
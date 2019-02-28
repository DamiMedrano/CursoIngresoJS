function mostrar()
{

var numero;
var numerosPrimos = 0;

numero = prompt("Ingrese un numero");
numero = parseInt(numero);

while(isNaN(numero)){
	
	numero = prompt("No es un numero. Ingrese un numero");
}

for(var i=2 ; i<numero/2 ; i++){

	if(numero % i ==0){

		console.log(i);
		numerosPrimos ++;
		break;
	}
}



}//FIN DE LA FUNCIÓN
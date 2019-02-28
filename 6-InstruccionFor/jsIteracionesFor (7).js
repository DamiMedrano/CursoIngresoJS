function mostrar()
{

var numero;
var numerosDiv = 0;

numero = prompt("Ingrese un numero");
numero = parseInt(numero);

while(isNaN(numero)){
	
	numero = prompt("No es un numero. Ingrese un numero");
}

for(var i=1 ; i<=numero ; i++){

	if(numero % i ==0){

		console.log(i);
		numerosDiv ++;
	}
}



}//FIN DE LA FUNCIÓN
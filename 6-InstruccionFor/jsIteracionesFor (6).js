function mostrar()
{

var numero;
var numerosPares = 0;

numero = prompt("Ingrese un numero");
numero = parseInt(numero);

while(isNaN(numero)){
	
	numero = prompt("No es un numero. Ingrese un numero");
}
	
for(var i=1 ; i<=numero ; i++){

	if(i % 2 ==0){

		console.log(i);
		numerosPares ++;
	}
}


}//FIN DE LA FUNCIÓN
////////////////////////////////////////////////////////////
#include <stdio.h>
#include <stdlib.h>

/////////////////////////////////

void sumar2(int, int);   //prototipo de la funcion, son los parametros o argumentos de la funcion;

////////////////////////////////

int main{

    int x;
    int y;
    int resultado;

    printf("Ingrese un nuemro:");
    scanf("%d", &x);

    printf("Ingrese otro nuemro:");
    scanf("%d", &y);

    resultado= sumar1(x, y);   //llamo a la funcion sumar1;

    printf("La suma de los numeros es %d/n/n", resultado);

    return 0; //devuelve el resultado,
}

//se declara como int, porque va a dolver un int // es el desarrollo de la funcion
void sumar2(int numero1, int numero2){

    int suma;

    suma=numero1+numero2;

    printf("La suma de los numeros es %d/n/n", suma); // como no puede devolver nada(void) imprime el resultado;
   // return 0; //no devuelve nada, porque es una funcion void
}

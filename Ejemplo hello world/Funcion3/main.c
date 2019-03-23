////////////////////////////////////////////////////////////
#include <stdio.h>
#include <stdlib.h>

/////////////////////////////////

int sumar3( );  // recibe un inte pero devuelve un void (parentesis vacios);

////////////////////////////////

int main{

    int suma;

    suma = sumar3();

    printf("La suma de los numeros es %d/n/n", suma);
}

//se declara como int, porque va a dolver un int // es el desarrollo de la funcion
int sumar3( ){

    int suma;

    suma=numero1+numero2;

    printf("La suma de los numeros es %d/n/n", suma); // como no puede devolver nada(void) imprime el resultado;
   // return 0; //no devuelve nada, porque es una funcion void
    int x;
    int y;
    int resultado;

    printf("Ingrese un numero:");
    scanf("%d", &x);

    printf("Ingrese otro nuemro:");
    scanf("%d", &y);

    resultado= sumar1(x, y);   //llamo a la funcion sumar1;

    printf("La suma de los numeros es %d/n/n", resultado);

    return 0; //devuelve el resultado,
}

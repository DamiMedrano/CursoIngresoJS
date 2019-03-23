#include <stdio.h>
#include <stdlib.h>

int main()
{
    int numero;
    int contPositivos=0;
    float sumaPositivos=0;
    float promedioPositivos; //2
    float sumaNegativos=0; //3
    int contPares=0; //1
    float numeroMax; //4
    float numeroMin; //4
    char respuesta;
    int primeraVez=1;


    do{
        printf("Ingrese un numero; \n");
        scanf("%f", numero);

        if(primeraVez=1){
            numeroMin=numero;
            numeroMax=numero;
            primeraVez=0;
        }
        if(numero%2==0){
            contPares++;
        }
        if(numero>=0){
            contPositivos++;
            sumaPositivos = sumaPositivos + numero;
            if(numeroMax<numero){
                numeroMax=numero;
            }
        }
        else{
            sumaNegativos=sumaNegativos+numero;

            if(numeroMin>numero){
                numeroMin=numero;
            }
        }

        printf("Desea continuar? \n");
        fflush(stdin);
        getche();
    }while(respuesta=='s');
    promedioPositivos=sumaPositivos/contPositivos;

    printf("La cantidad de pares es: %d \n", contPares);
    printf("El promedio es: %f \n", promedioPositivos);
    printf("La suma de los negativos es: %f \n", sumaNegativos);
    printf("El numero maximo fue: %f \n", numeroMax);
    printf("El numero minimo fue: %f \n", numeroMin);
    return 0;
}
////////////////////////////////////////////////////////////
#include <stdio.h>
#include <stdlib.h>

/////////////////////////////////

int sumar1(int, int);   //prototipo de la funcion, son los parametros o argumentos de la funcion;

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
int sumar1(int numero1, int numero2){

    int suma;

    suma=numero1+numero2;

    return 0; //devuelve el resultado,
}

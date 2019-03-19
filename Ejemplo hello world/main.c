#include <stdio.h>
#include <stdlib.h>

int main()
{
    int num1;
    int num2;
    int resultado;
    float promedio;
    // char letra = 'a';
    //float pi = 3.14;

    //printf("Hello world!\n");
    //printf("num1 vale %d y num2 vale %d \n", num, num2);

    printf("Ingrese primer numero: \n");
    scanf("%d", &num1);

    printf("Ingrese segundo numero: \n");
    scanf("%d", &num2);

    resultado = num1 + num2;

    printf("La suma de los numeros es: %d \n", resultado);

    promedio = (float)(num1 + num2)/ 2;

    printf("y el promedio es: %f \n", promedio);


    system("pause");
    return 0; //mantiene la ventana abierta
}

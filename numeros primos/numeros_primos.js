/* CONSIGNA: Pide un número por teclado e indica si es un número primo o no. Un número primo es
aquel que solo puede dividirse entre 1 y sí mismo. Por ejemplo: 25 no es primo, ya que
25 es divisible entre 5, sin embargo, 17 si es primo. */

let numero = parseInt(prompt("Ingrese un numero positivo"));
i=0;

esPrimo = true;
/* Inicializo i con el valor 2 ya que por definicion de numero primo un numero debe ser divisible solo por 1 y si mismo
Como valor final uso numero/2 ya que los numeros enteros no son divisibles por numeros mayores a su mitad
Igualmente podria haber dejado como valor final a numero, pero seria un desperdicio de recursos. */
for (i=2 ; i<(numero/2); i++) { 
    if (numero%i==0){ //Si el numero es divisible por algun numero, hace falso a esPrimo
        esPrimo=false;
    }
} 

if (esPrimo==true) { //Se chequea el resultado del ciclo for anterior e imprime la respuesta
    document.write(" El numero " + " " + numero + " es primo ");
} else {
    document.write(" El numero  " + " " + numero + " no es primo ");
}

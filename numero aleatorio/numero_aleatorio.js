/* Generar un número aleatorio comprendido entre 0 y 1000. Pedir, a continuación, al
usuario adivinar el número escogido por el ordenador. Para ello, debe introducir un
número comprendido entre 0 y 1000. Se compara el número introducido con el
calculado por el ordenador y se muestra en la consola "es mayor" o "es menor" en
función del caso. Se repite la operación hasta que el usuario encuentra el número. */

let min = 1;
let max = 1000;
let aleatorio = Math.floor(Math.random() * max - min +1) +min;
let intentos = 0;
let numero; 
let encontrado;
encontrado = true;

console.log(aleatorio);


while (encontrado = true) {
    numero = parseInt(prompt(`Ingrese un numero entre ${min} y ${max}`));  

  /* for (intentos; intentos <1000000; intentos++){    
    numero = parseInt(prompt(`Ingrese un numero entre ${min} y ${max}`)); */

    if (numero >=min && numero <= max) {
        if (numero < aleatorio){
                console.log("El numero ingresado es menor al que tenes que adivinar, segui intentando"); } 
                else if (numero > aleatorio) {
                    console.log("El numero ingresado es mayor al que tenes que adivinar, segui intentando");
                }   else if (numero == aleatorio) {
                        encontrado = false;
                        break;
                    }
    } else {
        console.log(" Debe ingresar un numero entre ", +min+ "y" , +max);
    }
}  



    




/* CONSIGNA: Pedir al usuario que ingrese un número repetidamente hasta que ingrese un -1 y en ese
caso se terminará el programa.
Al terminar, mostrará lo siguiente:
a. – mayor número introducido
b. – menor número introducido
c. – suma de todos los números
d. – suma de los números */

/* Estimo que hay un error en la consigna, ya que pide que se ingrese un solo numero repetidas veces y no 
tendria sentido todo lo que se pide abajo, como mostrar el menor o mayor. Y en el 4to inciso pareciera 
que esta incompleta la oracion. 
 */


var resultado = [];

do {
  var entrada = prompt('Introduzca un valor numérico:','0');
  if(entrada === '-1') {
    // el bucle debe terminar
    break;
  } else {
    // verificamos si el valor introducido es numérico o no
    if(!isNaN(parseInt(entrada))) {
      // si es numérico lo guardamos
      // si no lo es, será descartado
      resultado.push(entrada);
    }
  }
} while(true);


console.log(resultado);  //muestro resultado en consola 

let min = resultado[0]; //esta variable la usare luego para comparar , a priori digo que el primer elemento es el menor

for (var i = 0; i < resultado.length ; i++) { //recorro el array comparando para calcular el menor
    if (resultado[i] < min){
        min = resultado[i];
    }
}

console.log(` El valor minimo es ${min}`); //muestro en consola el menor numero de los que ingrese

let max = resultado[0];

for (var i = 0; i < resultado.length ; i++) { //recorro el array para calcular el mayor
    if (resultado[i] > max){
        max = resultado[i];
    }
}

console.log(` El valor maximo es ${max}`); // muestro en consola el mayor numero que ingrese

let suma = 0;

for (var i = 0; i < resultado.length; i++) { //calculo la suma
    suma += resultado[i];
    console.log(suma);
}
console.log(suma); 


/* CONSIGNA: Por teclado se ingresa el valor hora de un empleado. Posteriormente se ingresa el
nombre del empleado, la antigüedad y la cantidad de horas trabajadas en el mes. Se
pide calcular el importe a cobrar teniendo en cuenta que al total que resulta de
multiplicar el valor hora por la cantidad de horas trabajadas. Además, si el empleado
tiene más de 10 años de antigüedad hay que sumarle la cantidad de años trabajados
multiplicados por $30. Imprimir en pantalla el nombre, la antigüedad y el total a cobrar. */


// Ingreso de datos

let valorHora = parseInt(prompt("Ingrese el valor hora en $"));
let nombre = prompt("Ingrese el nombre del empleado");
let ant = parseInt(prompt("Ingrese los años de antiguedad"));
let cantHoras = parseInt(prompt("Ingrese las horas trabajadas en el mes"));

//Calculos

totalHoras = valorHora*cantHoras;
totalAntiguedad = ant*30;
totalCobrar = totalHoras + totalAntiguedad;

document.write(`El nombre del empleado/a es: ${nombre} --- Posee una antiguedad de ${ant} años  --- El total a cobrar es de $${totalCobrar} `);

//** ---- variables----  */
var unNumero = 45;
var otroNumero = 30;
var tercerNumero = 12;
var numeroElegido;
var mensaje;
var numero; 
var resultado;

var operacion; //** esta variable podria obtenerse de esta manera 
// **var operacion = document.getElementById = operacion.value ... en un input donde el usuario
//decida que operacion quiere ejecutar **//

// calcular el numero mayor y el menor de tres varibles//
//Mayor//
if (unNumero > otroNumero && unNumero > tercerNumero) {
    numeroElegido = unNumero;
} else if (otroNumero > unNumero && otroNumero > tercerNumero) {
    numeroElegido = otroNumero;
} else if (tercerNumero > unNumero && tercerNumero > otroNumero) {
    numeroElegido = tercerNumero;
}
console.log ("El número mayor de tres variables es ", numeroElegido);

//   --- otra forma con operador ternario ---//
mensaje = (unNumero > otroNumero && unNumero > tercerNumero) ? "El número mayor de tres variables es ". unNumero:
        (otroNumero > unNumero && otroNumero > tercerNumero) ? "El número mayor de tres variables es ". otroNumero:
        (tercerNumero > unNumero && tercerNumero > otroNumero) ? "El número mayor de tres variables es ".tercerNumero:
console.log (mensaje) 
// igual lo probé en la consola de chrome y no me imprime en mensaje en pantalla, arroja el mensaje "undefined" //

//calcular si un numero es par o impar //
if (numero % 2 == 0){
    console.log ("Tu número ", numero,  "es par.");
} else {
    console.log ("Tu número ", numero, " es impar.");
}
// --- otra forma con operador ternario  ---//
mensaje = (numero % 2 == 0) ? "Tu número es par":
        (numero % 2 == 1) ? "Tu número  es impar":
    console.log(mensaje)

//operaciones basicas mediante casos de uso//
switch (operacion){
    case 'suma':
        console.log("La suma de los números es = ", unNumero + otroNumero)
    break
    case 'resta':
        console.log("La resta de los números es = ", unNumero - otroNumero)
    break
        case 'multiplicacion':
        console.log("El producto de los números es = ", unNumero * otroNumero)
    break
    case 'division':
        console.log("El resultado de la division de los números es = ", unNumero / otroNumero)
    break
}
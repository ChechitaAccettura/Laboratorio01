
// tarea: realizar una funcion que permita segun
//las acciones dadas por el usuario mostrar por pantalla la 
//tabla de multiplicar, sumar, restar o dividir.

//dado el valor ingresado por el usuario


const prompt=require("prompt-sync")({sigint:true});

let x= Number (prompt("Ingrese el valor con el que desea operar: "));
let y= Number (prompt("Ingrese la operación que desea hacer: 1) sumar, 2) restar, 3) multiplicar, 4) dividir."));

const calculos = () => { 
if (!Number(x)) {
    console.log ("Ingrese sólo caracteres numéricos"); 
} else if (y===1) {
for (let i=1; i<=10; i++){
        console.log(x, "+", i, "=", (x+i));
    } 
}   else if (y===2) {
for (let i=1; i<=10; i++){
    console.log(x, "-", i, "=", (x-i));
    }    
}   else if (y===3) {
for (let i=1; i<=10; i++){
    let producto = i*x;
    console.log(x, " * ", i, " = ", producto);
    }
}  else if (y===4) {
for (let i=1; i<=10; i++){
    let resultado = y;
    console.log(y*i, " / ", i, " = ", resultado);
    }
} 
};

calculos()
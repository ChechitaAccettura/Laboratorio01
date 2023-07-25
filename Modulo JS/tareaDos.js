const prompt=require("prompt-sync")({sigint:true});

// ---- Encontrar el mayor de tres varaibles  ----//

let unNumero = Number (prompt("Ingrese el valor uno: "));
let otroNumero = Number (prompt("Ingrese el valor dos: "));
let tercerNumero= Number (prompt("Ingrese el valor tres: "));

if (!Number(unNumero) || !Number(otroNumero) || !Number(tercerNumero)) {
    console.log ("Ingrese sólo caracteres numéricos");
} else if (unNumero > otroNumero && unNumero > tercerNumero) {
    console.log("El número mayor de tres variables es ", unNumero);
} else if (otroNumero > unNumero && otroNumero > tercerNumero) {
    console.log("El número mayor de tres variables es ", otroNumero); 
} else if (tercerNumero > unNumero && tercerNumero > otroNumero) {
    console.log("El número mayor de tres variables es ", tercerNumero);  
}

// --- Tabla de Multiplicar --- //
let x= Number (prompt("Ingrese el valor que desea multiplicar: "));

if ( !Number(x)) {
    console.log ("Ingrese sólo caracteres numéricos");
} else {
for (let i=1; i<=10; i++){
    let producto = i*x;
    console.log(x, " * ", i, " = ", producto);
    }
}

// --- otra Tabla de Multiplicar usando while ---//
let o= Number (prompt("Ingrese el valor que desea multiplicar: "));
let i= 0;
while (i<=10){
    console.log (o, " * ", i, " = ", o*i);
    i++;
}

// --- Tabla de Dividir --- //
let y= Number (prompt("Ingrese el valor que desea en la tabla de dividir: "));

if ( !Number(y)) {
    console.log ("Ingrese sólo caracteres numéricos");
} else {
for (let i=1; i<=10; i++){
    let resultado = y;
    console.log(y*i, " / ", i, " = ", resultado);
    }
}

// --- Otra opcion de tabla de Dividir --- //

let z= Number (prompt("Ingrese el valor que desea en la tabla de dividir: "));

if ( !Number(z)) {
    console.log ("Ingrese sólo caracteres numéricos");
} else {
for (let i=1; i<=10; i++){
    let resultado = i;
    console.log(z*i, " / ", z, " = ", resultado);
    }
}

// --- La tercera es la vencida ... ---//

let n= Number (prompt("Ingrese el valor que desea en la tabla de dividir: "));

if ( !Number(n)) {
    console.log ("Ingrese sólo caracteres numéricos");
} else {
for (let i=1; i<=10; i++){
    let resultado = n/i;
    console.log(i, " / ", n, " = ", resultado);
    }
}
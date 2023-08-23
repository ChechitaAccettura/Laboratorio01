/**objeto
    person = {
        firstName, 
        lastName,
        birthday, 
        address, 
        status
};
agregar 10 objetos personas con diferentes datos 
*1- Filtrar por nombre (donde encuentre una coincidencia)
El usuario ingresa el valor a buscar.
*2- Mostrar el promedio de las edades.
**/

const prompt=require("prompt-sync")({sigint:true});
/**       -------------------PERSONAS--------------------- */

let persona = {
    firstName : "Luna",
    lastName : "Calixta",
    birthday: 19,
    address: "casa",
    status: true
};
let persona1 = {
    firstName : "Marcos",
    lastName : "Longhi",
    birthday: 42,
    address: "casa",
    status: true
};
let persona2 = {
    firstName : "Lucia",
    lastName : "Manes",
    birthday: 78,
    address: "centro",
    status: true
};
let persona3 = {
    firstName : "Fran",
    lastName : "Eugene",
    birthday: 77,
    address: "centro",
    status: true
};
let persona4 = {
    firstName : "Chechita",
    lastName : "Misma",
    birthday: 38,
    address: "casa",
    status: true
};
let persona5 = {
    firstName : "Margarita",
    lastName : "Tururu",
    birthday: 19,
    address: "casa",
    status: false
};
let persona6 = {
    firstName : "Pauli",
    lastName : "Iri",
    birthday: 34,
    address: "Camet",
    status: true
};
let persona7 = {
    firstName : "Gabriela",
    lastName : "Iri",
    birthday: 36,
    address: "San Juan",
    status: true
};
let persona8 = {
    firstName : "July",
    lastName : "Oliveras",
    birthday: 50,
    address: "Margaritas",
    status: false
};
let persona9 = {
    firstName : "Marcos",
    lastName : "Fernandez",
    birthday: 45,
    address: "Parque Lago",
    status: true
};

/* -----------------------------CREACION DE ARRAY----------------- */

arrayPersona = new Array;

arrayPersona.push(persona);
arrayPersona.push(persona1);
arrayPersona.push(persona2);
arrayPersona.push(persona3);
arrayPersona.push(persona4);
arrayPersona.push(persona5);
arrayPersona.push(persona6);
arrayPersona.push(persona7);
arrayPersona.push(persona8);
arrayPersona.push(persona9);

let personaElegida = prompt("Ingrese el criterio de búsqueda: ");

const findPerson = arrayPersona.find((people) => people.firstName == personaElegida);

console.log("****************************");
console.table(findPerson);
console.log("****************************");

/** ----- version corregida que encuentra cualquier coincidencia */
let coincidence = prompt("Ingrese el texto que desea buscar: ");


const findCoincidence = (arrayPersona, coincidence) => {
    coincidence = coincidence.toLowerCase();
    const filteredPeople = arrayPersona.filter(people => {
        const names = people.firstName.toLowerCase();
        return names.includes(coincidence) || names.startsWith(coincidence);
    });

    return filteredPeople;
};


console.log(findCoincidence());

console.log("****************************");

let cumpleArray = arrayPersona.map ((people) => people.birthday);

console.log ("**********************************")

const promedio = ((array) =>{
    var sumatoria = 0;
    for (let i=0; i<array.length; i++) {
    sumatoria = sumatoria += array[i];
    } return "El promedio de edades de los participantes es de " + sumatoria / array.length;
    });

    console.log(promedio(cumpleArray));

    console.log ("**********************************")

    /* _______________________--- otra forma de hacer promedio ---__________________*/

const promedio2 = ((array) =>{
    var sumatoria = 0;
    for (i=0; i<array.length; i++) {
        sumatoria = sumatoria += array[i].birthday;
    } return "El promedioDos de edades de los participantes es de " + sumatoria / array.length;
})

console.log(promedio2(arrayPersona));

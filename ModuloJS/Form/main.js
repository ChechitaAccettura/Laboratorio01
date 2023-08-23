let listadoDeElementos = document.querySelector("#listadoDeElementos");
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let dni = document.querySelector("#dni");
let agregar = document.querySelector("#agregar");


let arrayData = [];

const addData = (firstName, lastName, dni) => {
    let person = {
        Nombre: firstName,
        Apellido: lastName,
        Documento: dni
    } 
    arrayData.push(person);
};

let mostrarData = () => {
    let dataPersona='';
    arrayData.forEach((person, index) => {
        dataPersona += `<tr>
                    <td> ${index + 1} </td>
                    <td> ${person.Nombre}💕 </td>
                    <td> ${person.Apellido} </td>
                    <td> ${person.Documento} </td>
                </tr>`;
    });
    listadoDeElementos.innerHTML = dataPersona;
};

const addDataPersona = () =>{
    let nameInput = firstName.value;
    nameInput = nameInput.trim();
    let lastInput = lastName.value;
    lastInput = lastInput.trim(); 
    let dniInput = dni.value;
    dniInput = dniInput.trim();
    if(dniInput.length > 0){
        addData(nameInput, lastInput, dniInput);
        mostrarData();
        firstName.value= "";
        lastName.value= "";
        dni.value= "";
        firstName.focus();
    } else {
        alert("ERROR... MUCHO GLAMOUR PARA TANTO TRABAJO")
    }
};  

/*

const addDataPersona = () =>{
    addData();
    mostrarData();
}
*/
/*
agregar.addEventListener("click", addDataPersona()); */

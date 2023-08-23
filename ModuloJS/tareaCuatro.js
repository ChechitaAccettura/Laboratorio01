/** crear un array de personas
 * una funcion que permita ingresar personas al array
 * ingresar 10 personas con diferentes datos
 * mostrarlos por consola
 */

const prompt=require("prompt-sync")({sigint:true});

let arrayData = [];

const addData = () => {
    let firstName = prompt("Ingrese el primer nombre: ");
    let lastName = prompt("Ingrese el Apellido: ");
    let documento = Number (prompt("Ingrese el documento: "));
    let person = {
        Nombre: firstName,
        Apellido: lastName,
        Documento: documento
    } 
    arrayData.push(person);
};

const decision = () => {
    let opcion = Number (prompt("¿Qué desea hacer ahora?: 1) Continuar; 2) Finalizar"));
    if (opcion != 1 && opcion != 2) {
        console.log("ERROR.... Ingrese una opción válida: 1) Continuar; 2) Finalizar ");
        decision(); 
    } else if (opcion == 1) {
    addData();
    decision ();
    } else {
        console.log ("*****************************************************************");
        console.log ("Datos ingresados: ");
        console.table(arrayData);
        console.log ("*****************************************************************");
    }
}


addData();
decision ();

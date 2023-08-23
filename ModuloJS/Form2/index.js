let listArray = [];
let listInput = document.getElementById("listInput");
let addElemts = document.querySelector("#addElemts"); /** #para id o . para class */
let updateElemts = document.querySelector("#updateElemts");
let listadoElementos = document.querySelector("#listadoElementos");

let agregarInfo = (element) => { 
    listArray.push(element);
}

let mostrarInfo = () => {
    let bolsa='';
    listArray.forEach((papa, index) => {
        bolsa += `<tr>
                    <td> ${index + 1}</td>
                    <td> ${papa}💕 </td>
                </tr>`;
    })
    listadoElementos.innerHTML = bolsa;
}

let filtrado = (criterio) => {
    return listArray.findIndex((elemento) => {
        return elemento == criterio;
    })
}

let addButtonList = () =>{
    let textInput = listInput.value;
    textInput = textInput.trim();
    if(textInput.length > 0 && filtrado(textInput) == -1){
        agregarInfo(textInput);
        mostrarInfo();
        listInput.value="";
        listInput.focus();
    } else {
        alert("ERROR... MUCHO GLAMOUR PARA TANTO TRABAJO")
    }
};

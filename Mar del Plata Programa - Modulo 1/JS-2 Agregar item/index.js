/*      CONSTANTES      */
const inputItem = document.getElementById("inputItem");
const btnItems = document.getElementById("btnAgregar");
const listItems = document.getElementById("listItems");
const btnEliminar = document.getElementsByClassName("btn-danger");

/*      DINAMICA        */

btnAgregar.addEventListener("click",function(){
    const trElement = document.createElement("tr");
    const tdOne = document.createElement("td");
    const tdTwo = document.createElement("td");
    const btnEliminar = document.createElement("button");
        btnEliminar.innerText="Eliminar";
        btnEliminar.className="btn btn-danger";

    tdOne.innerText = inputItem.value;
    tdTwo.appendChild(btnEliminar);

    trElement.appendChild(tdOne);
    trElement.appendChild(tdTwo);

    listItems.prepend(trElement);

    inputItem.focus();
    inputItem.value="";
})

btn-danger.addEventListener("click",function(){
    trElement.remove();
})
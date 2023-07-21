/*     -------Constantes------   */
const primerDiv = document.querySelector(".div-1");
const segundoDiv = document.querySelector(".div-2");
const tercerDiv = document.querySelector(".div-3");

const titulo = document.querySelector(".title");

const botonCambiar = document.querySelector(".btn-primary");
const botonVolver = document.querySelector(".btn-secundary");

/*    ------FUNCIONES-----     */

botonCambiar.addEventListener('click',function(){
    primerDiv.style.background="rgb(184, 153, 106)";
    segundoDiv.style.background="rgb(78, 201, 160)";
    segundoDiv.style.width="50%";
    tercerDiv.style.background="rgb(107, 106, 184)";
    tercerDiv.style.width="50%";
    botonCambiar.setAttribute("disabled", "true");
    botonVolver.removeAttribute("disabled", "true");
    titulo.style.color="slategrey";
});

botonVolver.addEventListener('click',function(){
    primerDiv.style.background="rgb(78, 201, 160)";
    segundoDiv.style.background="rgb(107, 106, 184)";
    segundoDiv.style.width="100%";
    tercerDiv.style.background="rgb(184, 153, 106)";
    tercerDiv.style.width="100%";
    botonVolver.setAttribute("disabled", "true");
    botonCambiar.removeAttribute("disabled", "true");
    titulo.style.color="darkblue";
});
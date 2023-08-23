var opciones = [0, 1, 2];
//opciones [piedra, papel o tijera]


// para ver una funcion random accedemos a la propiedad Math de js

const initialGame = (min, max) =>{
    var numero = Math.floor(Math.random()*(max - min +1) + min)
    return numero;
}

const machineGame = () =>{
    let number = initialGame(0, 2);
    let unit = document.querySelector("#unit");
    let image = `<img src="${opciones[number]}>"`;
    let createDiv = document.createElement("div");
    createDiv.innerHTML = `<div class="col-4"`
}

initialGame();
console.log(initialGame(0,2));
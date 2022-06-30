//function clickea(contenido) {
//    contenido.innerText = "ON"
//}

const boton = document.getElementsByClassName("btn");
console.log(boton[0])

for(let i = 0; i < boton.length; i++) {
    boton[i].addEventListener("click", () => {
        let botonContent = boton[i].textContent;
        if( botonContent == "Off"){
            boton[i].innerHTML = "On"
        }
        if( botonContent == "On"){
            boton[i].innerHTML = "Off"
        }
    })
}


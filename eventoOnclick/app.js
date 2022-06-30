function turnLogin(contenido) {
    
    
    if(contenido.textContent == "Login"){
        contenido.innerText = "Logout" 
    } else {
        contenido.innerText = "Login" 
    }
}

function remover(elemento) {
    elemento.remove()
}

function alertar(elemento){
    let texto = elemento.parentNode.firstChild.nextSibling.textContent;
    alert(`${texto} was liked `)
}
let cont = document.querySelectorAll(".contador");
let btn = document.querySelectorAll(".likes");
//"btn" y "cont" son arreglos con todos los elementos del DOM pertenecientes a esa clase
//"i" corresponde a la psición del elemento en el arreglo "btn"
for (let i = 0; i < 3; i++){
    btn[i].addEventListener("click", () => {
        //modifica el "cont" en la posición específica donde se hizo click en "btn"
        let cantidad = Number(cont[i].textContent);
        cantidad++;

        cont[i].innerText = `${cantidad}`;
    });
};

console.log("----------------------");
const arreglo1 = [3.14, "comida", "pastel", true, "comida"];
// esto debería mostrar "delicioso, "delicioso"
const arreglo2 =[4, 1, 5, 7, 2];
// esto debería mostrar "Tengo hambre"

function siempreHambriento(arreglo){
    let n = "";
    arreglo.forEach(element => {
        
        if(element == 'comida'){
            n += "Delicioso "; 
        };
        
    });

    if(n == ""){
        console.log('Tengo Hambre');
    } else {
        console.log(n);
    };
};

siempreHambriento(arreglo1);
siempreHambriento(arreglo2);

console.log("----------------------");
//Dado un arreglo y un valor cutoff, devuelve un nuevo arreglo que contenga solo los valores mayores a cutoff.
const arr = [6, 8, 3, 10, -2, 5, 9];
const highPass = (arr, cutoff) => {
    let filterArr = [];
    arr.forEach(e => {
        if(e > cutoff){
            filterArr.push(e)
        } 
    })
    return filterArr;

}
console.log(highPass(arr, 5));

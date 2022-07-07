for (let i = 1; i <= 100; i++){
    let resultado = "";
    if( i % 3 == 0 ){
        resultado = "Fizz";
        
    } else if ( (i % 5 == 0) && !(i % 3 == 0)){
        resultado = "Buzz";
        
    } else if ( (i % 5 == 0) && (i % 3 == 0) ){
        resultado = "FizzBuzz";
        
    } else {
        resultado = i;
    };
    
    console.log( resultado )
}
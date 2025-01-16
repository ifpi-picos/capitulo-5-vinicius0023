let numero = parseInt(prompt("digite um número positivo"));

if (numero < 0){
    console.log("digite um número positivo");
}else {
    for (let i = 1; i <= numero; i += 2){
        console.log(i);
    }
}
let numero = parseInt(prompt("Insira um número positivo:"));

if (numero < 0){
    console.log("Insira um número positivo.")
}else{
    let i = 0;
    while(i <= numero){
        if (i % 2 === 0){
            console.log(i)
        }
        i++;
    }
}
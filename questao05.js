let escolha = prompt("escolha a conversão desejada: \n1. celsius para farenheit \n2. farenheit para celsius")

if(escolha === "1"||escolha ==="2") 
{
    let temperatura = parseFloat(prompt("digite a temperatura: "));

    if(escolha === "1"){
        let Farenheit = (temperatura *9/5)+ 32;
        console.log(temperatura= "°C é igual a"+ Farenheit.toFixed(2)+"°F");
    }else if(escolha === "2") {
        let celsius = (temperatura -32) *5/9;
        console.log(temperatura+ "°F é igual a" + celsius.toFixed(2)+"°C");
    }
}
else {
    console.log("opção inválida. por favor, escolha 1 ou 2.");
}
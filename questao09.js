let prossiga = true;

while (prossiga){
    let altura = Number(prompt("digite sua altura em metros: "))
    let peso = Number(prompt("digite seu peso em kilogramas: "))

if (altura > 0 && peso > 0){
    let imc = peso / (altura * altura)

    console.log ("IMC igual = "+ imc.toFixed(2))
switch (true){
    case (imc < 18.5): 
        console.log("Classificação: Abaixo do peso"); 
        break; 
    case (imc >= 18.5 && imc < 24.9): 
        console.log("Classificação: Peso normal"); 
        break; 
    case (imc >= 25 && imc < 29.9): 
        console.log("Classificação: Sobrepeso"); 
        break; 
    case (imc >= 30): 
        console.log("Classificação: Obesidade");
        break;
    default:
        console.log("IMC fora dos limites esperados.");
    }
    let continuar = prompt("Deseja calcular outro IMC? (sim/não)").toLowerCase();
    if (continuar !== "sim"){
        prossiga = false;
        console.log("Obrigado por calcular meu IMC!");
    } else {
        console.log("Por favor, digite o peso e altura");
    }
}
} 
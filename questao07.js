function classificarTriangulo() {
    let lado1 = parseFloat(prompt("digite o valor do primeiro lado"));
    let lado2 = parseFloat(prompt("digite o valor do segundo lado"));
    let lado3 = parseFloat(prompt("digite o vaor do terceiro lado"));

if  (isTrianguloValido(lado1, lado2, lado3)){
    if (lado1 === lado2 && lado2 === lado3){
    console.log ("o triângulo é equilátero");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
    console.log ("o triângulo é isóceles");
} else {
    console.log ("o triângulo é escaleno");}
} else {
    console.log ("os valores fornecidos não formamum triangulo válido");
}
}
function isTrianguloValido(lado1, lado2, lado3){
    return (lado1 + lado2 > lado3) && (lado1 + lado3 > lado2) && (lado2 + lado3 > lado1)
} 
classificarTriangulo(); 
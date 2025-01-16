let num1 = parseInt(prompt("digite o 1° numero: "))
let num2 = parseInt(prompt("digite o 2° numero: "))
let num3 = parseInt(prompt("digite o 3° numero: "))

let numeroMaior

if (num1 > num2 && num1 > num3) {
    numeroMaior = num1;
}
else if (num2 > num1 && num2 > num3) {
    numeroMaior = num2;
}
else 
{
    numeroMaior = num3;
}
console.log ("o maior numero é:", numeroMaior)
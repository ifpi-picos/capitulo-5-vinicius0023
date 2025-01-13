let numero = prompt("digite o numero")

numero = parseInt(numero)

const restoDivisao = numero % 2 

if (restoDivisao === 0) 
{
    console.log("é par")
}
else 
{
    console.log("é ímpar")
}
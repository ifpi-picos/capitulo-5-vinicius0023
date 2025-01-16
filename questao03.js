let nota1 = Number(prompt("nota 1: "))
let nota2 = Number(prompt("nota 2: "))
let nota3 = Number(prompt("nota 3: "))

let media = (nota1 + nota2 + nota3) / 3

if (media >= 7)
{
console.log("aprovado")
}
else if (media >= 4) 
{
console.log("recuperação")
}
else 
{
console.log("reprovado")
}

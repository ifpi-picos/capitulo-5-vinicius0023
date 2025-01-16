function calcularFatorial(n){
    if (n === 0 || n === 1){
        return 1;
    } else {
        return n * calcularFatorial(n - 1);
    }
}
function main(){
    const numero = parseInt(prompt("Digite um número para calcular o fatorial: "));
    const fatorial = calcularFatorial(numero);
    console.log(`o fatorial de ${numero} é ${fatorial}`);
}
main();
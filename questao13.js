const aleatório = Math.floor(Math.random() * 101) 

for(let i = 1; i <= 10; i++){
    const chute = parseInt(prompt("chute um numero: "))
    if (chute == aleatório){
        console.log ("parabéns, chute certo!")
        break
    } else if (chute < aleatório){
        console.log ("seu chute foi menor!")
    } else {
        console.log("seu chute foi maior!")
    }
}
let prato = prompt ("Escolha um prato: pizza, hambúrguer, salada, macarrão");

switch (prato.toLowerCase()){

case "pizza":
    console.log("Ótima escolha. Preço R$ 36,00. Descrição: pizza de calabresa");
    break;
case "hambúrguer":
    console.log("Ótima escolha. Preço R$ 16,00. Drescrição: hambúrguer X-triplo");
    break;
case "salada":
    console.log("Ótima escolha. Preço R$ 8,00. Descrição: salada de alface, cebola, pepino e cenoura");
    break;
case "macarráo":
    console.log("Ótima escolha. Preço R$ 15,00. Descrição: macarrão com queijo e molho de tomate");
    break;
default: 
    console.log("Prato não disponível. Escolha um do cardápio")
}
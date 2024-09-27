/*4) Apresente o Menu de Lanches:
1 -> X-SALADA-> R$ 20,00
2 -> X-BACON-> R$ 25,00
3 -> X-TUDO-> R$ 23,00
4 -> BAURU -> R$ 29,99
5 -> AMERICANO -> 22,50
*/


var cardapio = "=*=*=*= MENU LANCHES =*=*=*=\n";
cardapio = cardapio + "Código | Lanche | Preço\n";
cardapio += "1 | X-SALADA R$ 20,00\n"
cardapio += "2 | X-BACON R$ 25,00\n"
cardapio += "3 | X-TUDO R$ 23,00\n"
cardapio += "4 | BAURU  R$ 29,99\n"
cardapio += "5 | AMERICANO  R$ 22,50\n"
cardapio += "\nDigite o código do lanche escolhido:"

var codigo = parseInt(prompt(cardapio));
var quantidade = parseInt(prompt("Digite quantos lanches você vai querer:"));
var valorTotal = 0; 

if(codigo == 1){
    valorTotal = quantidade * 20;
}else if(codigo == 2){
    valorTotal = quantidade * 25;
}else if(codigo == 3){
    valorTotal = quantidade * 23;
}else if(codigo == 4){
    valorTotal = quantidade * 29;
}else if(codigo == 5){
    valorTotal = quantidade * 22;
}else{
    console.log("Digite um código VÁLIDO");
}

console.log("Pedido PRONTO.");
console.log("PEDIDO: " + quantidade );
console.log("O valor de seu lanche é: R$ " + valorTotal);

/*Apresente o Menu de Bebidas:
Refrigerante Lata -> R$ 5,00
Refrigerante 2L -> R$ 10,00
Agua -> R$ 3,50
Suco -> R$ 7,50
heineken -> R$ 18,00
heineken long -> R$ 12,50
*/

var carta = "=*=*=*= MENU BEBIDAS =*=*=*=\n";
carta = carta + "Número | Bebida | Preço\n";
carta += "1 | Refrigerante 350ml  R$ 5,00\n";
carta += "2 | Refrigerante 2L  R$ 10,00\n";
carta += "3 | Água  R$ 3,50\n";
carta += "4 | Suco  R$ 7,50\n";
carta += "\nDigite o codigo da Bebida escolhida:";

var numero = parseInt(prompt(carta));
var quantas = parseInt(prompt("Quantas bebidas você deseja comprar:"));
totalValor = 0;

if(numero == 1){
    totalValor = quantas * 5.00;
}else if(numero == 2){
    totalValor = quantas * 10.00;
}else if(numero == 3){
    totalValor = quantas * 3.50;
}else if(numero == 4){
    totalValor = quantas * 7.50;
}else if(numero == 5){
    totalValor = quantas * 18.00;
}else if(numero == 6){
    totalValor = quantas * 12.50;
}else{
    console.log("Digite um código VÁLIDO!")
}

console.log("Pedido PRONTO.");
console.log("PEDIDO: " + quantas + " Bebidas")
console.log("O valor de sua bebida é: R$ " + totalValor);

/* apresente as formas de pagamento:
PIX - 10% de desconto.
Dinheiro - 5% de desconto.
Débito - 3% de desconto.
Crédito - sem desconto.
Apresente todos os dados da compras, com seus calculos e valores;
*/

var formas = "=*=*=*= PAGAMENTO =*=*=*=\n"

formas += "1 | PIX - 10% de desconto\n"
formas += "2 | Dinheiro - 5% de desconto\n"
formas += "3 | Débito - 3% de desconto\n"
formas += "4 | Crédito - Sem desconto\n"

var pagamento = parseFloat(prompt(formas));
var TotalApagar = valorTotal + totalValor;

var pag = 0;
var total = 0;

if(pagamento == 1){
    pag = TotalApagar * 0.1; 
    total = TotalApagar - pag;
}else if(pagamento == 2){
    TotalApagar = valorTotal + totalValor * 0.05; 
}else if(pagamento == 3){
    TotalApagar = valorTotal + totalValor * 0.03;
}else if(pagamento == 4){
    TotalApagar = valorTotal + totalValor 
}else{
    console.log("Digite uma forma de pagamento VÁLIDA");
}

console.log("Sua compra ficou: " + total);






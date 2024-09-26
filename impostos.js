/*Elabore um programa que receba o salário bruto mensal de um funcionário e
apresente a faixa e valor do desconto de INSS e IRRF e o valor líquido do salário
baseado na seguinte tabela:

INSS (Instituto Nacional de Seguro Social):
Até R$ 1.302,00 = 7,5%
De R$ 1.302,01 a R$ 2.571,29 = 9%
De R$ 2.571,30 a R$ 3.856,94 = 12%
Acima de R$ 3.856,94 = 14%

IRRF (Imposto Retido na Fonte):
Até R$ 1.903,98 = Isento
De R$ 1.903,99 a R$ 2.826,65 = 7,5%
De R$ 2.826,66 a R$ 3.751,05 = 15%
De R$ 3.751,06 a R$ 4.664,68 = 22,5%
Acima de R$ 4.664,68 = 27,5%
*/

var menu = "=*=*=*= MENU LANCHES =*=*=*=\n"; 
menu += "CÓDIGO |  LANCHE   |  PREÇO\n";
menu += "   1   | X-SALADA  | R$ 20,00\n";
menu += "   2   | X-BACON   | R$ 25,00\n";
menu += "   3   | X-TUDO    | R$ 23,00\n";
menu += "   4   | BAURU     | R$ 29,99\n";
menu += "   5   | AMERICANO | R$ 22,50\n";
menu += "Digite o CÓDIGO do lanche:";

var codigoLanche = parseInt(prompt(menu));
var qtdeLanche = parseInt(prompt("Digite a QUANTIDADE desejada de lanches:"));
var valorLanches = 0;

if (codigoLanche == 1) {
    valorLanches = qtdeLanche * 20;
} else if (codigoLanche == 2) {
    valorLanches = qtdeLanche * 25;
} else if (codigoLanche == 3) {
    valorLanches = qtdeLanche * 23;
} else if (codigoLanche == 4) {
    valorLanches = qtdeLanche * 29.99;
} else if (codigoLanche == 5) {
    valorLanches = qtdeLanche * 22.5;
} else {
    console.log("Lanche inválido!");
}

console.log("Total de lanches: R$ " + valorLanches.toFixed(2));

var carta = "=*=*=*= MENU BEBIDAS =*=*=*=\n";
carta += "CÓDIGO |       BEBIDA      |  PREÇO\n";
carta += "  1    | Refrigerante Lata | R$ 5,00\n";
carta += "  2    | Refrigerante 2L   | R$ 10,00\n";
carta += "  3    | Água              | R$ 3,50\n";
carta += "  4    | Suco              | R$ 7,50\n";
carta += "  5    | Heineken          | R$ 18,00\n";
carta += "  6    | Heineken long     | R$ 12,50\n";
carta += "Digite o CÓDIGO da bebida:";

var codigoBebida = parseInt(prompt(carta));
var qtdeBebida = parseInt(prompt("Digite a QUANTIDADE desejada de bebidas:"));
var valorBebidas = 0;

if (codigoBebida == 1) {
    valorBebidas = qtdeBebida * 5;
} else if (codigoBebida == 2) {
    valorBebidas = qtdeBebida * 10;
} else if (codigoBebida == 3) {
    valorBebidas = qtdeBebida * 3.5;
} else if (codigoBebida == 4) {
    valorBebidas = qtdeBebida * 7.5;
} else if (codigoBebida == 5) {
    valorBebidas = qtdeBebida * 18;
} else if (codigoBebida == 6) {
    valorBebidas = qtdeBebida * 12.5;
} else {
    console.log("Bebida inválida!");
}

console.log("Total de bebidas: R$ " + valorBebidas.toFixed(2));

var opcao = "=*=*=*= FORMAS DE PAGAMENTO =*=*=*=\n";
opcao += "CÓDIGO |   OPÇÃO  |   DESCONTO\n";
opcao += "  1    | PIX      | 10%\n";
opcao += "  2    | Dinheiro | 5%\n";
opcao += "  3    | Débito   | 3%\n";
opcao += "  4    | Crédito  | SEM DESCONTO\n";
opcao += "Digite o CÓDIGO da forma de pagamento escolhida:";

var pagamento = parseInt(prompt(opcao));
var valorCompras = valorLanches + valorBebidas;
var valorDesconto = 0;

if (pagamento == 1) {
    valorDesconto = valorCompras * 0.1;
    console.log("=*=*=*= PAGAMENTO =*=*=*=");
    console.log("Total da compra: R$ " + valorCompras.toFixed(2));
    console.log("Forma de Pagamento: PIX");
    console.log("Desconto: 10%");
} else if (pagamento == 2) {
    valorDesconto = valorCompras * 0.05;
    console.log("=*=*=*= PAGAMENTO =*=*=*=");
    console.log("Total da compra: R$ " + valorCompras.toFixed(2));
    console.log("Forma de Pagamento: DINHEIRO");
    console.log("Desconto: 5%");
} else if (pagamento == 3) {
    valorDesconto = valorCompras * 0.03;
    console.log("=*=*=*= PAGAMENTO =*=*=*=");
    console.log("Total da compra: R$ " + valorCompras.toFixed(2));
    console.log("Forma de Pagamento: DÉBITO");
    console.log("Desconto: 3%");
} else if (pagamento == 4) {
    console.log("=*=*=*= PAGAMENTO =*=*=*=");
    console.log("Total da compra: R$ " + valorCompras.toFixed(2));
    console.log("Forma de Pagamento: CRÉDITO");
    console.log("Desconto: SEM DESCONTO");
} else {
    console.log("=*=*=*= PAGAMENTO =*=*=*=");
    console.log("Compra CANCELADA!!!");
}

var total = valorCompras - valorDesconto;

if (total > 0) {
    console.log("O valor final de sua compra é: R$ " + total.toFixed(2));
}

console.log("*=*=*=* AGRADECEMOS PELA PREFERÊNCIA *=*=*=*");
console.log("=*=*=*= VOLTE SEMPRE =*=*=*=");

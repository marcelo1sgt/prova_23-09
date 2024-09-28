/*
4) Apresente o Menu de Lanches:
1 -> X-SALADA-> R$ 20,00
2 -> X-BACON-> R$ 25,00
3 -> X-TUDO-> R$ 23,00
4 -> BAURU -> R$ 29,99
5 -> AMERICANO -> 22,50

Apresente o Menu de Bebidas:
Refrigerante Lata -> R$ 5,00
Refrigerante 2L -> R$ 10,00
Agua -> R$ 3,50
Suco -> R$ 7,50
heineken -> R$ 18,00
heineken long -> R$ 12,50

apresente as formas de pagamento:
PIX - 10% de desconto.
Dinheiro - 5% de desconto.
Débito - 3% de desconto.
Crédito - sem desconto.
Apresente todos os dados da compras, com seus calculos e valores;
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

var lanches = {
    1: { nome: "X-SALADA", preco: 20 },
    2: { nome: "X-BACON", preco: 25 },
    3: { nome: "X-TUDO", preco: 23 },
    4: { nome: "BAURU", preco: 29.99 },
    5: { nome: "AMERICANO", preco: 22.5 }
};

if (lanches[codigoLanche]) {
    valorLanches = qtdeLanche * lanches[codigoLanche].preco;
    console.log("=*=*=*= LANCHE =*=*=*=");
    console.log("Lanche: " + lanches[codigoLanche].nome + "\nQuantidade: " + qtdeLanche + " unidades");
} else {
    console.log("Lanche, CÓDIGO INVÁLIDO!");
}

console.log("Valor dos lanches: R$ " + valorLanches.toFixed(2));

var carta = "=*=*=*= MENU BEBIDAS =*=*=*=\n";
carta += "CÓDIGO |       BEBIDA      |  PREÇO\n";
carta += "  1    | Refrigerante Lata | R$ 5,00\n";
carta += "  2    | Refrigerante 2L   | R$ 10,00\n";
carta += "  3    | Água              | R$ 3,50\n";
carta += "  4    | Suco              | R$ 7,50\n";
carta += "Digite o CÓDIGO da bebida:";

var codigoBebida = parseInt(prompt(carta));
var qtdeBebida = parseInt(prompt("Digite a QUANTIDADE desejada de bebidas:"));
var valorBebidas = 0;

var bebidas = {
    1: { nome: "REFRIGERANTE LATA", preco: 5 },
    2: { nome: "REFRIGERANTE 2 LITROS", preco: 10 },
    3: { nome: "ÁGUA", preco: 3.5 },
    4: { nome: "SUCO", preco: 7.5 },
};

if (bebidas[codigoBebida]) {
    valorBebidas = qtdeBebida * bebidas[codigoBebida].preco;
    console.log("=*=*=*= BEBIDA =*=*=*=");
    console.log("Bebida: " + bebidas[codigoBebida].nome + "\nQuantidade: " + qtdeBebida + " unidades");
} else {
    console.log("Bebida, CÓDIGO INVÁLIDO!");
}

console.log("Valor das bebidas: R$ " + valorBebidas.toFixed(2));

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
var pago = valorCompras - valorDesconto;

if (pagamento == 1) {
    valorDesconto = valorCompras * 0.1;
    console.log("=*=*=*= PAGAMENTO =*=*=*=");
    console.log("Total da compra: R$ " + valorCompras);
    console.log("Forma de Pagamento: PIX");
    console.log("Desconto: 10%");
    console.log ("O valor do desconto é de: R$ " + valorDesconto);
} else if (pagamento == 2) {
    valorDesconto = valorCompras * 0.05;
    console.log("=*=*=*= PAGAMENTO =*=*=*=");
    console.log("Total da compra: R$ " + valorCompras);
    console.log("Forma de Pagamento: DINHEIRO");
    console.log("Desconto: 5%");
    console.log ("O valor do desconto é de: R$ " + valorDesconto);
} else if (pagamento == 3) {
    valorDesconto = valorCompras * 0.03;
    console.log("=*=*=*= PAGAMENTO =*=*=*=");
    console.log("Total da compra: R$ " + valorCompras);
    console.log("Forma de Pagamento: DÉBITO");
    console.log("Desconto: 3%");
    console.log ("O valor do desconto é de: R$ " + valorDesconto);
} else if (pagamento == 4) {
    console.log("=*=*=*= PAGAMENTO =*=*=*=");
    console.log("Total da compra: R$ " + valorCompras);
    console.log("Forma de Pagamento: CRÉDITO");
    console.log("Desconto: SEM DESCONTO");
} else {
    console.log("=*=*=*= PAGAMENTO =*=*=*=");
    console.log("COMPRA CANCELADA!!!");
}

var total = valorCompras - valorDesconto;

if (pagamento > 0) {
    console.log("O valor final de sua compra é: R$ " + total);
}

console.log("*=*=*=* AGRADECEMOS PELA PREFERÊNCIA *=*=*=*");
console.log("=*=*=*= VOLTE SEMPRE =*=*=*=");

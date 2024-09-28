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


Solicite ao usuário qual lanche e quantidade que deseja comprar, qual refrigerante e quantidade , ao final apresente as formas de pagamento:
PIX - 10% de desconto.
Dinheiro - 5% de desconto.
Débito - 3% de desconto.
Crédito - sem desconto.
Apresente todos os dados da compra, com seus cálculos e valores.
*/

var menuLanches = "=*=*=*= MENU LANCHES =*=*=*=\n";
menuLanches += "CÓDIGO |   LANCHE  |   PREÇO\n";
menuLanches += "   1   | X-SALADA  | R$ 20,00\n";
menuLanches += "   2   | X-BACON   | R$ 25,00\n";
menuLanches += "   3   | X-TUDO    | R$ 23,00\n";
menuLanches += "   4   | BAURU     | R$ 29,99\n";
menuLanches += "   5   | AMERICANO | R$ 22,50\n";
menuLanches += "Digite o CÓDIGO do LANCHE desejado:\n";
var codigoLanche = parseFloat(prompt(menuLanches));

var qtdeLanche = parseInt(prompt("Digite a QUANTIDADE do LANCHE desejado: "));
var valorLanche = 0;

if (codigoLanche == 1) {
    valorLanche = qtdeLanche * 20;
    console.log("=*=*=*= LANCHE =*=*=*=");
    console.log("Lanche: X - SALADA\n" + "Quantidade: " + qtdeLanche + " unidades\n" + "Total: R$ " + valorLanche);
} else if (codigoLanche == 2) {
    valorLanche = qtdeLanche * 25;
    console.log("=*=*=*= LANCHE =*=*=*=");
    console.log("Lanche: X - BACON\n" + "Quantidade: " + qtdeLanche + " unidades\n" + "Total: R$ " + valorLanche);
} else if (codigoLanche == 3) {
    valorLanche = qtdeLanche * 23;
    console.log("=*=*=*= LANCHE =*=*=*=");
    console.log("Lanche: X - TUDO\n" + "Quantidade: " + qtdeLanche + " unidades\n" + "Total: R$ " + valorLanche);
} else if (codigoLanche == 4) {
    valorLanche = qtdeLanche * 29.99;
    console.log("=*=*=*= LANCHE =*=*=*=");
    console.log("Lanche: BAURU\n" + "Quantidade: " + qtdeLanche + " unidades\n" + "Total: R$ " + valorLanche);
} else if (codigoLanche == 5) {
    valorLanche = qtdeLanche * 22.5;
    console.log("=*=*=*= LANCHE =*=*=*=");
    console.log("Lanche: AMERICANO\n" + "Quantidade: " + qtdeLanche + " unidades\n" + "Total: R$ " + valorLanche);
} else if (codigoLanche == 0) {
    console.log("=*=*=*= LANCHE =*=*=*=");
    console.log("Lanche: 0\nQuantidade: 0 unidades\nTotal: R$ 0,00");
} else {
    console.log("=*=*=*= LANCHE =*=*=*=");
    console.log("Digite um CÓDIGO VÁLIDO para LANCHE!");
};

var menuBebidas = "=*=*=*= MENU BEBIDAS =*=*=*=\n";
menuBebidas += "CÓDIGO |       BEBIDA      |   PREÇO\n";
menuBebidas += "   1   | REFRIGERANTE LATA | R$ 5,00\n";
menuBebidas += "   2   | REFRIGERANTE 2L   | R$ 10,00\n";
menuBebidas += "   3   | ÁGUA              | R$ 3,50\n";
menuBebidas += "   4   | SUCO              | R$ 7,50\n";
menuBebidas += "Digite o CÓDIGO da BEBIDA desejada:";
var codigoBebida = parseInt(prompt(menuBebidas));

var qtdeBebida = parseInt(prompt("Digite a QUANTIDADE da BEBIDA desejada:"));
var valorBebida = 0;

if (codigoBebida == 1) {
    valorBebida = qtdeBebida * 5;
    console.log("=*=*=*= BEBIDA =*=*=*=");
    console.log("Bebida: REFRIGERANTE LATA\n" + "Quantidade: " + qtdeBebida + " unidades\n" + "Total: R$ " + valorBebida);
} else if (codigoBebida == 2) {
    valorBebida = qtdeBebida * 10;
    console.log("=*=*=*= BEBIDA =*=*=*=");
    console.log("Bebida: REFRIGERANTE 2L\n" + "Quantidade: " + qtdeBebida + " unidades\n" + "Total: R$ " + valorBebida);
} else if (codigoBebida == 3) {
    valorBebida = qtdeBebida * 3.5;
    console.log("=*=*=*= BEBIDA =*=*=*=");
    console.log("Bebida: ÁGUA\n" + "Quantidade: " + qtdeBebida + " unidades\n" + "Total: R$ " + valorBebida);
} else if (codigoBebida == 4) {
    valorBebida = qtdeBebida * 7.5;
    console.log("=*=*=*= BEBIDA =*=*=*=");
    console.log("Bebida: SUCO\n" + "Quantidade: " + qtdeBebida + " unidades\n" + "Total: R$ " + valorBebida);
} else if (codigoBebida == 0) {
    console.log("=*=*=*= BEBIDA =*=*=*=");
    console.log("Bebida: 0\nQuantidade: 0 unidades\nTotal: R$ 0,00");
} else {
    console.log("=*=*=*= BEBIDA =*=*=*=");
    console.log("Digite um CÓDIGO VÁLIDO para BEBIDA!");
};


var formaPag = "=*=*=*= PAGAMENTO =*=*=*=\n";
formaPag += "CÓDIGO|   FORMA  | DESCONTO\n";
formaPag += "  1   | PIX      |    10%\n";
formaPag += "  2   | DINHEIRO |     5%\n";
formaPag += "  3   | DÉBITO   |     3%\n";
formaPag += "  4   | CRÉDITO  | - SEM DESCONTO\n";
formaPag += "Digite o CÓDIGO da FORMA de PAGAMENTO";
var codigoPag = parseInt(prompt(formaPag));

var compra = valorLanche + valorBebida;
var desconto = 0;
var pagamento = compra - desconto;

if (codigoPag == 1) {
    console.log("=*=*=*= PAGAMENTO =*=*=*=");
    console.log("Total da compra: R$ " + compra);
    console.log("Forma de Pagamento: PIX");
    console.log("Desconto: 10%");
    console.log("Total DESCONTO: R$ " + compra * 0.1),
    console.log("Total a pagar: R$ " + compra * 0.9);
} else if (codigoPag == 2) {
    console.log("=*=*=*= PAGAMENTO =*=*=*=");
    console.log("Total da compra: R$ " + compra);
    console.log("Forma de Pagamento: DINHEIRO");
    console.log("Desconto: 5%");
    console.log("Total DESCONTO: R$ " + compra * 0.05),
    console.log("Total a pagar: R$ " + compra * 0.95);
} else if ( codigoPag == 3) {
    console.log("=*=*=*= PAGAMENTO =*=*=*=");
    console.log("Total da compra: R$ " + compra);
    console.log("Forma de Pagamento: DÉBITO");
    console.log("Desconto: 3%");
    console.log("Total DESCONTO: R$ " + compra * 0.03),
    console.log("Total a pagar: R$ " + compra * 0.97);
} else if (codigoPag == 4) {
    console.log("=*=*=*= PAGAMENTO =*=*=*=");
    console.log("Total da compra: R$ " + compra);
    console.log("Forma de Pagamento: CRÉDITO");
    console.log("Desconto: 0%");console.log("Total DESCONTO: SEM DESCONTO"),
    console.log("Total a pagar: R$ " + compra);
} else if (codigoPag == 0) {
    console.log("Compra CANCELADA!\nEscolha um CÓDIGO VÁLIDO para a FORMA de  PAGAMENTO!");
} else {
    console.log("=*=*=*= PAGAMENTO =*=*=*=");
    console.log("Compra CANCELADA!\nEscolha um CÓDIGO VÁLIDO para a FORMA de  PAGAMENTO!");
}

console.log ("=*=*=*= AGRADECEMOS PELA PREFERÊNCIA =*=*=*=");
console.log ("=*=*=*= VOLTE SEMPRE =*=*=*=");
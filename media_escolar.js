/*
Análise de Desempenho Escolar: Desenvolva um algorítmo que leia as notas de 4 bimestres de um aluno e
calcule a média. Informe se o aluno foi aprovado (média >= 7), em recuperação (5 <= média < 7) ou
reprovado (média < 5).
*/

var nota1 = parseFloat(prompt("Digite a nota do 1º Bimestre: "));
var nota2 =  parseFloat(prompt("Digite a nota do 2º Bimestre: "));
var nota3 =  parseFloat(prompt("Digite a nota do 3º Bimestre: "));
var nota4 =  parseFloat(prompt("Digite a nota do 4º Bimestre: "));


var notas = nota1 + nota2 + nota3 + nota4; 
var media = notas / 4;


if(media >= 7){
    console.log("Parabéns...!!!\nVocê foi aprovado!!!");
    console.log("Sua média final foi: " + media); 
}else if(media >=  5){
    console.log("Você ficou de recuperação.\nNão desista, você terá uma nova oportunidade!!!");
    console.log("Sua média final foi: " + media);
}else if(media < 5 ){
    console.log("Lamentamos, você foi reprovado.\nNão desista, ano que vem estaremos juntos novamente!");
    console.log("Sua média final foi: " + media);
}else{
    console.log("Escreva uma nota válida:");
}
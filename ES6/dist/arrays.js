"use strict";

var redesSociais = ["Facebook", "Twitter", "Instagram", "LinkedIn"];
redesSociais.map(function (item) {
  console.log("Eu tenho um perfil no ".concat(item));
});
console.log("==============================================");
var alunos = ["Maurício", "Luciano", "Jaqueline", "Gisele"];
var cargos = ["Programador", "Motorista", "Cozinheira", "Cozinheira"];
var alunos2 = alunos.map(function (aluno, cargoIndice) {
  return {
    nome: aluno,
    cargo: cargos[cargoIndice]
  };
});
alunos2.forEach(function (aluno) {
  console.log("".concat(aluno.nome, " trabalha hoje como ").concat(aluno.cargo, "."));
});
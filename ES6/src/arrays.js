const redesSociais = ["Facebook", "Twitter", "Instagram", "LinkedIn"];

redesSociais.map((item)=>{
    console.log(`Eu tenho um perfil no ${item}`)
});

console.log("==============================================")


const alunos = ["Maurício", "Luciano", "Jaqueline", "Gisele"];
const cargos = ["Programador", "Motorista", "Cozinheira", "Cozinheira"];

const alunos2 = alunos.map((aluno, cargoIndice)=>{
    return {
        nome: aluno,
        cargo : cargos[cargoIndice]
    }
});

alunos2.forEach((aluno)=>{
    console.log(`${aluno.nome} trabalha hoje como ${aluno.cargo}.`)
})
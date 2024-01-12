type aluno = {
    nome: string;
    cursos?: string[];
    idade: number;
}

const alunos: aluno[] = [
    { 
        nome: 'Maurício',
        cursos: ['Front-end', 'Back-end'],
        idade: 26
    },
    { 
        nome: 'Luciano',
        cursos: ['Front-end', 'python'],
        idade: 27
    }
];

alunos.push({
    nome: 'Ana',
    cursos: ['Front-end', 'Ui/Ux'],
    idade: 25
})
console.log(alunos)

const novoAluno: aluno = {
    nome: 'Lucas',
    idade: 27
}
function exibeNome(aluno: aluno) {
    console.log(aluno.nome);
}
console.log(exibeNome(novoAluno));
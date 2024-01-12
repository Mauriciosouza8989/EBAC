const pessoas =[{nome: 'mauricio'}, {nome: 'luciano'}, {nome: 'mauricio'}, {nome: 'luciano'}]

console.log(pessoas.find(pessoa => {
    return pessoa.nome === 'gessica'
}))
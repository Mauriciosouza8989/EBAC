const meuMap = new Map();
meuMap.set('name', 'Maurício');
meuMap.set('stack', 'html, css, javascript');
console.log(meuMap);

const name = meuMap.get('name');
console.log(name);

console.log(meuMap.size);

console.log(meuMap.has('name'));

for(let chave of meuMap.keys()) {
    console.log(chave);
}

for(let valor of meuMap.values()) {
    console.log(valor);
}

for(let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`);
}

meuMap.delete('stack');
console.log(meuMap);

// meuMap.clear();
// console.log(meuMap.size);


const cpfs = new Set();
cpfs.add('00072587040');
cpfs.add('81533501025');
cpfs.add('68448510062');
console.log(cpfs);

console.log(cpfs.keys());
console.log(cpfs.values());

cpfs.forEach((value =>{
    console.log(value);
}))

//REMOÇÃO DE ITENS DUPLICADOS
//O SET NÃO PERMITE ITENS DUPLICADOS.
const array = ['Maurício', 'Luciano', 'Gisele', 'Jasqueline', 'Maurício', 'Luciano'];
const arrayAsSet = new Set([...array]);
console.log(arrayAsSet);

//AGORA TRANSFORMAR O SET EM UM ARRAY
const arrayWithoutDuplicates = [...arrayAsSet]
console.log(arrayWithoutDuplicates);
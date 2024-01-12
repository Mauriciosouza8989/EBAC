//REST
function sum(){
    let sum = 0;
    for (let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}

function sumWithRestOperator(...numbers){
    const sum = numbers.reduce((total, currentNumber)=>{
        total += currentNumber;
        return total;
    }, 0)
    return sum;
}

console.log(sum(10, 20, 30));
console.log(sumWithRestOperator(10, 20, 30));

//=\=\=\=\=\=\=\=\=\=\=\=\=\=\\
// SPREAD

const numbers = [1,2,3,4];
console.log(...numbers);

const timesDeFutebolDeSaoPaulo = ['Corinthians', 'São-Paulo', 'Santos'];
const timesDeFutebolDoRio = ['Flamengo', 'Botafogo', 'Fluminense'];
const todosOsTimes = [...timesDeFutebolDeSaoPaulo, ...timesDeFutebolDoRio]
console.log(...todosOsTimes);
console.log(todosOsTimes);

const [time1, time2, time3, ...outrosTimes] = todosOsTimes
console.log(time1, time2, time3);
console.log(outrosTimes);


const carroDaJulia = {
    modelo: 'gol',
    marca: 'vw',
    motor: 1.6
};
const carroDaAna = {
    ...carroDaJulia,
    motor: 1.8
}
console.log(carroDaJulia);
console.log(carroDaAna);
const { motor: motorDoCarroDaJulia } = carroDaJulia;
console.log(motorDoCarroDaJulia);
const { motor: motorDoCarroDaAna } = carroDaAna;
console.log(motorDoCarroDaAna);

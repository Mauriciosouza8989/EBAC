function calculaArea(x: number, y: number){
    return x + y;
}
console.log(calculaArea(10, 10))

function somar(...numeros: number[]): void{
    // numeros.reduce()
    console.log(numeros);
}
somar(5,5,5);

function teste(): string|number {
    if(10 > 5){
        return 'Dez é maior que cinco!';
    }else{
        return 5;
    }
}
const resultadoDeTeste = teste();
console.log(resultadoDeTeste);
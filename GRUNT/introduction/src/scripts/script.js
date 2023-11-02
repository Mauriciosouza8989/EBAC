
const numeroSorteado = document.querySelector('#numeroSorteado');
const sortear = document.querySelector('#sortear');
const maxNumber = document.querySelector('#max-number');
const resultado = document.querySelector('.resultado');

sortear.addEventListener('click', function(e){
    e.preventDefault();
    if(maxNumber){
        resultado.style.display = 'block';
        const sort = Math.floor(Math.random() * maxNumber.value)
        numeroSorteado.innerHTML = sort +1;
    }
})



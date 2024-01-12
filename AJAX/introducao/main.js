// document.addEventListener('DOMContentLoaded', ()=>{
//     document.getElementById('search-cep').addEventListener('click', ()=>{
//         //AJAX
//         const xhttp = new XMLHttpRequest();
//         const cep = document.getElementById('search-cep');
//         const endpoint = `https://viacep.com.br/ws/${cep}/json`;
//         xhttp.open('GET', endpoint);
//         xhttp.send()

//         //https://viacep.com.br/ws/14350000/json

//     });
// });

$(document).ready(function() {
    $('#cep').mask('00000-000');
    $('#search-cep').click(function(e){
        e.preventDefault();
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;
        const butonSearch = $('#search-cep');

        $(butonSearch).find('i').addClass('d-none');
        $(butonSearch).find('span').removeClass('d-none');

        // $.ajax(endpoint).done(function(res){
        //     const bairro = res.bairro;
        //     const logradouro = res.logradouro;
        //     const cidade = res.localidade;
        //     const uf = res.uf;
        //     const endereco = `${logradouro} - ${bairro} - ${cidade} - ${uf}`;

        //     setTimeout(() => {
        //         $("#adress").val(endereco);
        //         $(butonSearch).find('span').addClass('d-none');
        //         $(butonSearch).find('i').removeClass('d-none');
        //     },1500)

        // })

        fetch(endpoint)
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            const bairro = res.bairro;
            const logradouro = res.logradouro;
            const cidade = res.localidade;
            const uf = res.uf;
            const endereco = `${logradouro} - ${bairro} - ${cidade} - ${uf}`;
            $("#adress").val(endereco);
        })
        .catch((err) => {
            alert('Opa! Ocorreu um erro ao buscar o endereço. Tente novamente mais tarde.')
        })
        .finally(() => {
            setTimeout(() => {
                $(butonSearch).find('span').addClass('d-none');
                $(butonSearch).find('i').removeClass('d-none');
            },1000)
        })
    })
    $('#form-pedido').submit((e) => {
        e.preventDefault();
        if($('#name').val().length === 0){
            throw new Error('Please enter a name');
        }
    })
})
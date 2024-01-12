$(document).ready(()=>{

    $("#phone").mask("(00) 00000-0000",{
        placeholder: "(00) 00000-0000"
    })
    $("#cpf").mask("000.000.000-00")
    $("#cep").mask("00000-000")
    $("form").validate({
        rules: {
            name: {
                required: true,
            },
            email: {
                required: true,
            },
            phone: {
                required: true,
            },
            cpf: {
                required: true,
            },
            cep: {
                required: true,
            }
            
        },
        messages: {
            name: "Por favor, insira o seu nome.",
            phone: "Por favor, insira o seu telefone.",
            email: "Por favor, insira o seu E-mail.",
            cpf: "Por favor, insira o seu CPF",
            cep: "Por favor, insira o seu CEP"
            
        }

    })

})
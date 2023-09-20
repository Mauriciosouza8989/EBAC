$(document).ready(()=>{
    $('.carrossel').slick({
        autoplay: true,
    })

    $('.hamburguer-menu').click(()=>{
        $('nav').slideToggle();
    })

    $("#phone").mask("(00) 00000-0000",{
        placeholder: "(00) 00000-0000"
    })
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
            
        },
        messages: {
            name: "Por favor, insira o seu nome.",
            phone: "Por favor, insira o seu telefone.",
            email: "Por favor, insira o seu E-mail.",
            veiculoDeInteresse: "Por favor, insira o veiculo de interesse.",
            message: "Por favor, insira uma mensagem.",
            
        }

    })

    $(".listaVeiculos button").click(function(){
        const veiculoDeInteresse = $(this).parent().find("h3").text();
        $("#veiculo-de-interesse").val(veiculoDeInteresse)
        const destino = $("#contato");
        $("html").animate({
            scrollTop: destino.offset().top,
        }, 1000)
    })
})
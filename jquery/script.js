$(document).ready(()=>{
    $('button[type="button"]').click(()=>{
        $('form').slideDown();
    });

    $('form').on('submit', (e)=>{
        e.preventDefault();
        const new_image = $('#new-image').val();
        const new_item = $('<li style="display: none"></li>');
        $(`<img src="${new_image}"/>`).appendTo(new_item);
        $(`
            <div class="img-link">
                <a target="_blank" href="${new_image} title="Ver imagem em tamanho real">Ver imagem em tamanho real</a>
            </div>
        `).appendTo(new_item);
        new_item.appendTo('ul');
        $(new_item).fadeIn('slow');
        $('#new-image').val('')
    });

    $('button[type="reset"]').click(()=>{
        $('form').slideUp();
    });

    $('ul').on(()=>{
        $('.img-link').slideUp();
    });
});
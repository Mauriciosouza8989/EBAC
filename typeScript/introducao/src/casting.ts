//Como em outro arquivo eu já tenho a variável idade,
//aqui eu tenho que utilizar esta forma de pasta virtual
//para poder gerar uma nova variável com o nome já utilizado em outro arquivo!

namespace casting{
    let idade: any = 26;
    (idade as number).toFixed();
    (idade as string).length;
}
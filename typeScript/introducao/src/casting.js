"use strict";
//Como em outro arquivo eu já tenho a variável idade,
//aqui eu tenho que utilizar esta forma de pasta virtual
//para poder gerar uma nova variável com o nome já utilizado em outro arquivo!
var casting;
(function (casting) {
    let idade = 26;
    idade.toFixed();
    idade.length;
})(casting || (casting = {}));

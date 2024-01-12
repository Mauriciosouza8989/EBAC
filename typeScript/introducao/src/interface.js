"use strict";
class Conta {
    constructor(numeroDaConta) {
        this.saldo = 0;
        this.numeroDaConta = numeroDaConta;
    }
}
class ContaSalario extends Conta {
    depositar(valor) {
        this.saldo += valor;
    }
}
class ContaCorrente extends Conta {
    constructor() {
        super(...arguments);
        this.taxaDeTransferencia = 0;
    }
    transferir(valor, destino) {
        destino.saldo += (valor - this.taxaDeTransferencia);
        return true;
    }
    ;
}

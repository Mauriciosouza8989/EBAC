class Conta {
    numeroDaConta: number;
    saldo: number = 0;

    constructor(numeroDaConta: number){
        this.numeroDaConta = numeroDaConta;
    }
}

class ContaSalario extends Conta{
    depositar(valor: number){
        this.saldo += valor;
    }
}


interface ITransacional{
    transferir: (valor: number, destino: Conta) => boolean;
    taxaDeTransferencia: number;
}
interface IEmpresa extends ITransacional{
    cnpj: string;
    NomeDaEmpresa: string;
}

class ContaCorrente extends Conta implements ITransacional{
    transferir(valor: number, destino: Conta) {
        destino.saldo += (valor - this.taxaDeTransferencia);
        return true;
    };
    taxaDeTransferencia: number = 0;
}
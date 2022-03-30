import { cliente } from "./cliente.js";

export class contaCorrente {
    static numeroDeContas = 0;
    agencia;
    _cliente;

    set cliente(novoValor){
        if (novoValor instanceof cliente){
        this._cliente= novoValor
        }
    }

    get cliente(){
        return this._cliente
    }

    _saldo = 0;

    get saldo(){
        return this._saldo
    }

    constructor (cliente, agencia){
        this.cliente= cliente;
        this.agencia= agencia;
        contaCorrente.numeroDeContas += 1;
    }

    sacar(valor){
        if (this._saldo >= valor){
            this._saldo -= valor;
            return valor;
            }
    }

    depositar(valor){
        if(valor <= 0){
        return;
        }
        this._saldo += valor;
    }

    tranferir(valor, conta){
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }
};
//classe abstrada, não deve ser instanciada diretamente
import { cliente } from "./cliente.js";
export class Conta{

constructor (saldoInicial, cliente, agencia){
    if(this.constructor == Conta){
        throw new Error("Conta é uma classe abstrata, você não deve instancia-la diretamente");
    }
    this._saldo= saldoInicial;
    this.cliente= cliente;
    this.agencia= agencia;
   
    
}

set cliente(novoValor){
    if (novoValor instanceof cliente){
    this._cliente= novoValor
    }
}

get cliente(){
    return this._cliente
}


get saldo(){
    return this._saldo
}


sacar(valor){
    throw new Error("O metodo sacar é abstrato")

}

_sacar (valor, taxa){
    const valorSacado = taxa * valor;
    if (this._saldo >= valorSacado){
        this._saldo -= valorSacado;
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
import {cliente} from "./cliente.js"
import {contaCorrente} from "./ContaCorrente.js"

const cliente1 = new cliente()

cliente1.nome = "Ricardo";
cliente1.cpf = 19824827994;

const cliente2 = new cliente()

cliente2.nome = "Bruna";
cliente2.cpf = 29237468209;



const contaCorrenteRicardo = new contaCorrente();

contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;

const conta2 = new contaCorrente();
conta2.agencia = 1001
conta2.cliente = cliente2

contaCorrenteRicardo.depositar(500);

contaCorrenteRicardo.tranferir(200, conta2);

console.log(contaCorrenteRicardo)
console.log(conta2)


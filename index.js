import {cliente} from "./cliente.js"
import {contaCorrente} from "./ContaCorrente.js"

const cliente1 = new cliente("Ricardo", 19824827994)

const cliente2 = new cliente("Bruna", 29237468209)

const contaCorrenteRicardo = new contaCorrente(cliente1, 1001);

const conta2 = new contaCorrente(cliente2, 1001);

contaCorrenteRicardo.depositar(500);

contaCorrenteRicardo.tranferir(200, conta2);

console.log(contaCorrente.numeroDeContas)


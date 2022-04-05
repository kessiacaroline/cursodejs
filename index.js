import {cliente} from "./cliente.js"
import { Diretor } from "./Sistema interno/Diretor.js"
import { Gerente } from "./Sistema interno/Gerente.js"
import { SistemaAutenticacao } from "./sistemaAutenticacao.js"

const Diretor1 = new Diretor ("Claudia", 10000, 23434567890)
const Gerente1 = new Gerente ("Lais", 7000, 23465476280)


const cliente1 = new cliente ("Anna", 54278965213, "2345");


 

const estaLogado = SistemaAutenticacao.login(cliente1, "2345")

console.log (estaLogado)
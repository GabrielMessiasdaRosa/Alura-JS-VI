//
import { Cliente } from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
//

//
const cliente1 = new Cliente('Gabriel Messias', "075.604.581-47", "13.858.148-5" );
//

//
const contaCorrenteGabriel = new ContaCorrente(1001, cliente1);
//

//
contaCorrenteGabriel.depositar(180);
//

//
console.log(contaCorrenteGabriel);
console.log("Ola", cliente1.nomeCompleto, "\nSeu saldo é : ", contaCorrenteGabriel.saldo);

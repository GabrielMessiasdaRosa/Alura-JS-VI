
import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./contas/ContaCorrente.js"
import { ContaPoupanca } from "./contas/ContaPoupanca.js"
import { ContaSalario } from './contas/ContaSalario.js'
//

//
const cliente1 = new Cliente('Gabriel Messias', "075.604.589-47", "13.858.248-5", "Ponta Grossa", "Curitiba");
//


//

const contaCorrenteGabriel = new ContaCorrente(0, 1001, cliente1);
const contaPoupancaGabriel = new ContaPoupanca(150, 1001, cliente1);
const contaSalarioGabriel = new ContaSalario(150, 1001, cliente1)

//

//
contaCorrenteGabriel.depositar(150);
contaCorrenteGabriel.sacar(50)
contaPoupancaGabriel.sacar(35)
contaSalarioGabriel.sacar(25)


//
console.log("************************************");
console.log("*","Bem vindo", cliente1.nomeCompleto, "       *");
console.log("*                                  *");
console.log("*","Saldo Conta Corrente:", contaCorrenteGabriel.saldo, "        *");
console.log("*                                  *");
console.log("*","Saldo Conta Poupança:", contaPoupancaGabriel.saldo,"     *");
console.log("*                                  *");
console.log("*","Saldo Conta Salario:", contaSalarioGabriel.saldo,"     *");
console.log("************************************");

console.log("\n####################################");
console.log("INFO do", contaCorrenteGabriel._cliente);
console.log("####################################");

console.log("\n>>>> Desenvolvido por Gabriel Messias da Rosa, estudante de analise e desenvolvimento de sistemas; <<<<\n")
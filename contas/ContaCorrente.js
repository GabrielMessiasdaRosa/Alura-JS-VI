
import { Conta } from './Conta.js';

export class ContaCorrente extends Conta {

    static numeroDeContas = 0;
    constructor(saldo, agencia, cliente) {
        Conta._saldo = saldo;
        super(saldo, agencia, cliente)
        ContaCorrente.numeroDeContas += 1;
        
    };

    ///Sobreescrevendo o comportamento da classe 
    sacar(valor,taxa) {
        taxa = 1.1
        return this._sacar(valor, taxa);
    };
};
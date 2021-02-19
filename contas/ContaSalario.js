import { Conta } from './Conta.js';



export class ContaSalario extends Conta {
    constructor(saldoInicial, agencia, cliente){
        super(saldoInicial,agencia,cliente)


    }
    sacar(valor){
        const taxa = 1.01;
        return this._sacar(valor,taxa);
    }


}
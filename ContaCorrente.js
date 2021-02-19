import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    //atributos publicos

    static numeroDeContas = 0;
    
    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
            return;
        }
        else {
            return;
        }

    }
    
    get cliente() {
        return this._cliente;
    }

    // atributos privados
    _saldoContaCorrente = 0;

    get saldo() {
        return this._saldoContaCorrente;
    }

    sacar(valor) {
        if (this._saldoContaCorrente >= valor) {
            this._saldoContaCorrente -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if (valor > 0) {
            this._saldoContaCorrente += valor;
            return valor;

        }
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

    constructor(agencia,cliente) {
        this._agencia = agencia;
        this.cliente = cliente;
        this.cidade = "Curitiba";
        ContaCorrente.numeroDeContas += 1;
    }
}
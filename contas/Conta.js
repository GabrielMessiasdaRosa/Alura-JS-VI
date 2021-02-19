// classes abstratas só funciona para ser herdada, jamais usar "new" neste tipo de classe; 

export class Conta {
    constructor(saldoInicial, agencia, cliente) {
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;

        if(this.constructor == Conta){
            throw new Error("Voce nao deveria instanciar um objeto do tipo 'Conta' diretamente\n ----Esta é um classe abstrata");
        }
    }


    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;

        }
    }

    get cliente() {
        return this._cliente;
    }

    // atributos privados
    _saldo = 0;

    get saldo() {
        return this._saldo;
    }


    //Metodos abstratos sao criados para serem sobreescritos;
    sacar(valor) {
        throw new Error("O metodo sacar da conta é abstrato");
        
    }
    _sacar(valor, taxa){
        
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return;
    }

    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
            return valor;

        }
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

}
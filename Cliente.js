export class Cliente {

    get cpf() {
        return this._cpf;
    }
    constructor(nome, cpf, rg, cidadeNatal, cidadeMoradia) {
        this.nomeCompleto = nome;
        this._cpf = cpf;
        this._rg = rg;
        this._naturalidade = cidadeNatal;
        this._cidadeMoradia = cidadeMoradia;

    }
} 

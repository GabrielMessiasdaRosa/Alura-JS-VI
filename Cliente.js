export class Cliente {

   get cpf(){
       return this._cpf;
   }
   constructor(nome,cpf,rg){
       this.nomeCompleto = nome;
       this._cpf = cpf;
       this._rg = rg;
   }
} 

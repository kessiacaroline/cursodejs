export class Funcionarios{
    constructor(nome, salario, cpf){
        this._nome=nome;
        this._salario=salario;
        this._cpf=cpf;

        this.bonificacao = 1;
        this.senha;
    }

    autenticar(senha){
        return senha == this._senha

    }

    cadastrarSenha(senha){
        this._senha=senha
    }
}
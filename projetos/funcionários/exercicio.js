class Funcionario {
    _nome;
    _numeroMatricula;
    _anoAdmissao;
    _endereco;
    _salario;
    _tempoEmpresa;
    _baterPonto;


    constructor(nome, numeroMatricula, anoAdmissao, endereco, salario, tempoEmpresa) {
        this._nome = nome;
        this._numeroMatricula = numeroMatricula;
        this._anoAdmissao = anoAdmissao;
        this._endereco = endereco;
        this._salario = salario;
        this._tempoEmpresa = tempoEmpresa;
    }

    verificarTempoEmpresa(anoAtual) {
        const tempo = anoAtual - this._anoAdmissao;
        return `${this._nome} está na empresa há ${tempo} anos.`;
    }

    baterPonto() {
        return `Ponto registrado para ${this._nome}.`;
    }

    receberSalario() {
        return `${this._nome} recebeu um salário de R$ ${this._salario}.`;
    }
}

class Gerente extends Funcionario {
    constructor(nome, numeroMatricula, anoAdmissao, endereco, salario) {
        super(nome, numeroMatricula, anoAdmissao, endereco, salario);
    }

    receberSalario() {
        const salarioBonus = this._salario * 1.2;
        return `${this._nome} (Gerente) recebeu um salário com bônus: R$ ${salarioBonus}.`;
    }    

    autorizarDespesa(valor) {
        return `Despesa de R$ ${valor} autorizada por ${this._nome}.`;
    }
}

class OperadorDeCaixa extends Funcionario {
    constructor(nome, numeroMatricula, anoAdmissao, endereco, salario) {
        super(nome, numeroMatricula, anoAdmissao, endereco, salario);
    }

    fechamentoDeCaixa(valorMovimentado) {
        return `${this._nome} registrou o fechamento do caixa: R$ ${valorMovimentado}.`;
    }
}

class Estagiario extends Funcionario {
    constructor(nome, numeroMatricula, anoAdmissao, endereco) {
        super(nome, numeroMatricula, anoAdmissao, endereco, 800); // valor fixo de bolsa
        this._atividades = [];
    }

    receberSalario() {
        return `${this._nome} recebeu sua bolsa no valor fixo de R$ ${this._salario}.`;
    }

    registrarAtividade(descricao) {
        this._atividades.push(descricao);
        return `Atividade registrada para ${this._nome}: "${descricao}"`;
    }

}

let Funcionario1 = new Funcionario("Brigael", "B34C", 2020, "Rua lapa dos titos", 3000, 3);
console.log(Funcionario1.receberSalario());
console.log(Funcionario1.verificarTempoEmpresa(2025));
console.log(Funcionario1.baterPonto());

const gerente = new Gerente("Clériton", "G001", 2015, "Av. dos titos", 7000);
console.log(gerente.receberSalario());
console.log(gerente.autorizarDespesa(15000));
console.log(gerente.baterPonto());

const operador = new OperadorDeCaixa("Andreas Pereira", "OC002", 2018, "Rua Das Ruas", 2500);
console.log(operador.fechamentoDeCaixa(12345.67));
console.log(operador.receberSalario());
console.log(operador.baterPonto());

const estagiario = new Estagiario("Aécio o Brabo", "E003", 2023, "Rua Dos Brabos");
console.log(estagiario.receberSalario());
console.log(estagiario.registrarAtividade("Organizou documentos."));
console.log(estagiario.registrarAtividade("Participou de reunião com o RH."));
console.log(estagiario.baterPonto());
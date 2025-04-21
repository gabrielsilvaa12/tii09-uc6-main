import { Pessoa } from "./Pessoa.js";

export class Funcionario extends Pessoa {
    #matricula;
    #cargo;

    constructor(nome, documento, matricula, cargo) {
        super(nome, documento);
        this.#matricula = matricula;
        this.#cargo = cargo;
    }

    get matricula() { return this.#matricula; }
    get cargo() { return this.#cargo; }

    toString() {
        return `${super.toString()} - Matrícula: ${this.#matricula} - Cargo: ${this.#cargo}`;
    }

    static fromJSONorObject(obj) {
        const funcionario = new Funcionario(obj.nome, obj.documento, obj.matricula, obj.cargo);
        return funcionario;
    }
}
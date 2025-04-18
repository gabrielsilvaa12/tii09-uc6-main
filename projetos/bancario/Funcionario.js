import { Pessoa } from "./Pessoa.js";

export class Funcionario extends Pessoa {
    #matricula;
    #cargo;

    constructor(nome, documento, matricula, cargo) {
        super(nome, documento);  // Chama o construtor da classe Pai (Pessoa)
        
        if (!matricula || !cargo) {
            throw new Error("Matrícula e cargo são obrigatórios.");
        }

        this.#matricula = matricula;
        this.#cargo = cargo;
    }

    get matricula() {
        return this.#matricula;
    }

    get cargo() {
        return this.#cargo;
    }

    toString() {
        return `${super.toString()}, Matrícula: ${this.#matricula}, Cargo: ${this.#cargo}`;
    }
}

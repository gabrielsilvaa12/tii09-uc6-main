export class Pessoa {
    #nome;
    #documento;

    constructor(nome, documento) {
        if (!nome || !documento) {
            throw new Error("Nome e documento são obrigatórios.");
        }

        this.#nome = nome;
        this.#documento = documento;
    }

    get nome() {
        return this.#nome;
    }

    get documento() {
        return this.#documento;
    }

    toString() {
        return `Nome: ${this.#nome}, Documento: ${this.#documento}`;
    }
}

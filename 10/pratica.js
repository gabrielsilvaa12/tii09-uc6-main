class Personagem {
    #nome;
    #pontoDeVida;
    #forca;
    #vivo;

    constructor(nome, pontosDeVida) {
        this.#nome = nome;
        this.#pontoDeVida = pontosDeVida;
        this.#forca = 30;
        this.#vivo = true;
    }

    mostrarDados() {
        console.log(`O personagem ${this.#nome} tem ${this.#pontoDeVida} de vida`);
    }

    tomarDano(valor) {
        if (valor > 0) {
            this.#pontoDeVida -= valor;
            console.log(`${this.#nome} recebeu ${valor} de dano!`);
            
            if (this.#pontoDeVida <= 0) {
                this.#pontoDeVida = 0;
                this.#vivo = false;
                console.log(`${this.#nome} morreu!`);
            }
        } else {
            console.log("Valor inválido!");
        }
    }

    recuperarVida(valor) {
        if (valor > 0 && this.#vivo) {
            this.#pontoDeVida += valor;
            console.log(`${this.#nome} recuperou ${valor} de vida!`);
        } else {
            console.log(`${this.#nome} 000000FA-LE-CEU`);
        }
    }

    atacar(inimigo) {
        if (this.#vivo) {
            console.log(`${this.#nome} atacou ${inimigo.#nome}!`);
            inimigo.tomarDano(this.#forca);
        } else {
            console.log(`${this.#nome} não pode atacar, porque MORREU!`);
        }
    }
}

let gotham = new Personagem("Batman", 120);
let arqueiro = new Personagem("Robin", 90);

gotham.mostrarDados();
arqueiro.mostrarDados();

gotham.atacar(arqueiro);
arqueiro.mostrarDados();

arqueiro.atacar(gotham); // Testando ataque após dano
arqueiro.recuperarVida(20);

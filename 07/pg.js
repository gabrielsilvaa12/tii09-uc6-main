function saudacao(nome, lugar) {
    console.log("Olá, " + nome + ", boa noite");
    console.log("Sejam bem vindos ao " + lugar)
}

// saudacao("Gabriel", "Shooping de osasco")
// saudacao("Lucas", "Curso")
// saudacao("Carlos", "Curso")
// saudacao("Adenilsa", "Curso")

function soma(a, b) {
    return a + b;
}

// let resultado = soma(5, 10);
// console.log(resultado); // Exibe 15
// console.log(soma(3, 4)) // Exibe 7
// console.log(soma(2, 2) * 5) // Exibe 20

//// Escopo local de funções

function teste() {
    let mensagem = "Olá";
    console.log(mensagem)
}

// teste()
// console.log(mensagem) //Não funcionará, pois esta fora da função local

let dizAlgo = function() {
    console.log("Eu disse");
    console.log("Ele disse");
    console.log("Nós dissemos");
}

// dizAlgo()

// Arrow Function

function dobro(x) {
    return x * 2;
}

let dobroAnonimo = function(x) {
    return x * 2;
}

// Anonimo
let dobroArrow = (x) => {
    return x * 2;
}

let dobroSimples = x => x * 2;

console.log(dobro(3))
console.log(dobroAnonimo(3))
console.log(dobroArrow(4))
console.log(dobroSimples(4))
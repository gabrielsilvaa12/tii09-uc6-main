let estacionamento = [
    ["Vazio", "Vazio", "Vazio"],
    ["Vazio", "Vazio", "Vazio"],
    ["Vazio", "Vazio", "Vazio"],
]

function estacionarCarro(linha, coluna, placa) {
    if(estacionamento[linha][coluna] === "Vazio") {
        estacionamento[linha][coluna] = placa;
    } else {
        console.log(`ESSA VAGA JA TEM DONO! VEÍCULO: ${estacionamento[linha][coluna]}`);
    }
}

function removerCarro(linha, coluna) {
    if(estacionamento[linha][coluna] !== "Vazio") {
        estacionamento[linha][coluna] = "Vazio";
    } }

function exibirEstacionamento() {
    console.log(estacionamento);
}

exibirEstacionamento()
estacionarCarro(1, 1, "ZBX9887");
estacionarCarro(2, 1, "ABT0801");
exibirEstacionamento();
estacionarCarro(1, 1, "TTT0055");
removerCarro(2, 1)
exibirEstacionamento();
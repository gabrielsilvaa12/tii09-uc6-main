import { Utils } from "./Utils.js";
import { BancoDeDados } from "./BancoDeDados.js";

export class RegistroEstacionamento {
    #id;
    #veiculo;
    #cliente;
    #horaEntrada;
    #horaSaida;
    #valorCobrado;

    constructor(veiculo, cliente) {
        if (!(veiculo instanceof Veiculo) || !(cliente instanceof Cliente)) {
            throw new Error("Dados inválidos para registro.");
        }

        this.#id = Utils.getProximoId('registro-');
        this.#veiculo = veiculo;
        this.#cliente = cliente;
        this.#horaEntrada = new Date();
        this.#horaSaida = null;
        this.#valorCobrado = null;
    }

    get id() { return this.#id; }
    get veiculo() { return this.#veiculo; }
    get cliente() { return this.#cliente; }
    get horaEntrada() { return this.#horaEntrada; }
    get horaSaida() { return this.#horaSaida; }
    get valorCobrado() { return this.#valorCobrado; }

    finalizarSaida() {
        this.#horaSaida = new Date();
        const horas = Math.ceil((this.#horaSaida - this.#horaEntrada) / (1000 * 60 * 60));
        this.#valorCobrado = 10 + Math.max(0, horas - 1) * 5;
    }

    static fromJSONobject(obj) {
        const veiculo = BancoDeDados.buscarVeiculoPorPlaca(obj.veiculo.placa);
        const cliente = BancoDeDados.buscarClientePorId(obj.cliente.id);
    
        if (!veiculo || !cliente) {
            throw new Error("Registro inválido: cliente ou veículo não encontrados.");
        }
    
        const registro = new RegistroEstacionamento(veiculo, cliente);
        registro.#id = obj.id;
        registro.#horaEntrada = new Date(obj.horaEntrada);
        registro.#horaSaida = obj.horaSaida ? new Date(obj.horaSaida) : null;
        registro.#valorCobrado = obj.valorCobrado;
        return registro;
    }
    

    toJSON() {
        return {
            id: this.#id,
            veiculo: this.#veiculo.toJSON(),
            cliente: { id: this.#cliente.id },
            horaEntrada: this.#horaEntrada,
            horaSaida: this.#horaSaida,
            valorCobrado: this.#valorCobrado
        };
    }
}
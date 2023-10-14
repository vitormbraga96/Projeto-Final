class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'atacou';
        }

        const mensagem = `o ${this.tipo} atacou usando ${ataque}`;
        console.log(mensagem);
    }
}

// Exemplo de uso:
const heroi1 = new Heroi("Herói 1", 25, "mago");
heroi1.atacar();

const heroi2 = new Heroi("Herói 2", 30, "guerreiro");
heroi2.atacar();

const heroi3 = new Heroi("Herói 3", 35, "monge");
heroi3.atacar();

const heroi4 = new Heroi("Herói 4", 28, "ninja");
heroi4.atacar();

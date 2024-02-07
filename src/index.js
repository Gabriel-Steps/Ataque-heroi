class Jogo{
    constructor(nome,idade,tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar(){
        if(this.tipo === "mago"){
            console.log(`O ${this.tipo} atacou usando magia`)
        }else if(this.tipo === "guerreiro"){
            console.log(`O ${this.tipo} atacou usando uma espada`)
        }else if(this.tipo === "monge"){
            console.log(`O ${this.tipo} atacou usando artes marciais`)
        }else if(this.tipo === "ninja"){
            console.log(`O ${this.tipo} atacou usando shuriken`)
        }
    }
}

let Mago = new Jogo("Personagem1",35,"mago")
let Guerreiro = new Jogo("Personagem2",40,"guerreiro")
let Monge = new Jogo("Personagem3",20,"monge")
let Ninja = new Jogo("Personagem4",30,"ninja")
Mago.atacar()
Guerreiro.atacar()
Monge.atacar()
Ninja.atacar()

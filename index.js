class personaje{
    constructor(nomePersonaje, idadePersonaje, tipoPersonaje, ataquePersonaje){
        this.nomePersonaje = nomePersonaje
        this.idadePersonaje = idadePersonaje
        this.tipoPersonaje = tipoPersonaje
        this.ataquePersonaje = ataquePersonaje
    }
    atacar(){
        console.log(`O ${this.tipoPersonaje} atacou usando ${this.ataquePersonaje}`)
    }
}

let guerreiroPersonaje = new personaje("Luis", "16", "Guerreiro", "Espada")
let magoPersonaje = new personaje("Angel", "28", "Mago", "Magia")
let mongePersonaje = new personaje("Gabriel", "20", "Monge", "Marciais")
let ninjaPersonaje = new personaje("JUan", "30", "Ninja", "shuriken")

guerreiroPersonaje.atacar();
magoPersonaje .atacar();
mongePersonaje.atacar();
ninjaPersonaje.atacar();
class Pokemon { // Definimos la clase iniciando con mayúscula porque es buena práctica.
    //Encapsulamiento
    #name = ""; //Hacemos el listado de atributos y los declaramos vacíos. Con el signo de # se hace privado el atributo.
    #type = "";
    #evolutions = []; //Se declaró un arreglo vacío.

    constructor(name, type, evolutions) { 
        this.#name = name; //Colocamos el nombre del atributo con el signo #
        this.#type = type;
        this.#evolutions = evolutions;
    }
    //Se coloca un set para cada atributo. Set recibe un parámetro y no tiene retorno. Permite MODIFICAR atributos de la clase.
    set name(value) { //Esta línea es para acceder a los atributos privados, a través del método set. 
        this.#name = value; //Set name cambia el atributo a su nuevo valor.
    }

    set type(value) {
        this.#type = value;
    }

    set evolutions(value) {
        this.#evolutions = value;
    }
    //Método get. Se coloca uno por atributo. No recibe parámetros y siempre tiene retorno. Permite CONSULTAR atributos de la clase.
    get name () {
        return this.#name;
    }

    get type () {
        return this.#type;
    }

    get evolutions () {
        return this.#evolutions;
    }

    attack() { 
        return `${this.name} está atacando`;
    }

    evolve(evolution = 0) { //Si evolve no recbe ningún parámetro, el valor será cero, por default. Es decir, al hacer esto, vuelves los parámetros opcionales.
        const EVOLVE = this.#evolutions[evolution] || ""; //Se declara variable para acceder a las evoluciones a través de su posición en el arreglo. Si se ingresa posición 10 y ésta no existe, entonces se le agregará el valor vacío. De una u otra forma se le dará un valor. También podemos poner el mensaje después del or ||, pero para este ejemplo dejaremos la cadena vacía.
        let message = "No puedo evolucionar :(";

        if (EVOLVE) { //Si EVOLVE tiene algo por dentro la condición será tomada como verdadera y se ejecuta la siguiente acción.
            message = `${this.#name} está evolucionando a ${EVOLVE}` 
            this.name = EVOLVE; //Como es un nuevo pokemón (por su evolución) se reasigna el nombre que ahora es Charmaleon.
        }
        return message;
    }
};

const charmander = new Pokemon ("Charmander", "Fuego",[ "Charmaleon", "Charizard"]); 
const Squirtle = new Pokemon ("Squirtle","Aqua",["Wartortle", "Blastoise"]);

/* console.log(charmander.name);
console.log(charmander.attack());
console.log(charmander.evolve());
console.log(charmander.attack());
console.log(charmander.evolve(1));
charmander.name = "Pikachu";
console.log (charmander.name); */

//Abstracción. No conocemos cómo actúa la clase por dentro, pero puedo usarlo, puedo interactuar con él.
const animals = ["Perros","Gatos", "Lobos"];
animals.forEach(animal => {
    console.log(animal);
})
//En este caso sabemos usar un forEach, pero desconocemos si hay un ciclo for o while dentro; sin embargo, podemos interactuar con él. Si se llegara a modificar internamente, sin tocar el uso del forEach no nos afectaría. 

class Pokemon { // Definimos la clase iniciando con mayúscula porque es buena práctica.

    name = ""; //Hacemos el listado de atributos y los declaramos vacíos.
    type = "";
    evolutions = []; //Se declaro un arreglo vacío

    /* constructor () { //Tener más constructores permite instanciar los objetos de diferente manera, con uno, dos, tres parámetros. Da mayor flexibilidad. Su uso dependerá de la situación.

    }

    constructor (name) {
        this.name = name;
    }

    constructor (name, type) {
        this.name = name;
        this.type = type;
    } */

    constructor(name, type, evolutions) { //El constructor va aquí y recibirá los párametros. Es opcional usarlo para establecer las propiedades (name, type, evolutions).
        this.name = name; //Hace referencia al elemento que esta dentro. Hace referencia al name de la linea 3. Se rellena el objeto y se hace la asignación de atributos que se recibirán por parámetros.
        this.type = type;
        this.evolutions = evolutions;
    }
    attack() { //Este y línea 29 son los métodos.
        return `${this.name} está atacando`;
    }

    evolve(evolution = 0) { //Si evolve no recbe ningún parámetro, el valor será cero, por default. Es decir, al hacer esto, vuelves los parámetros opcionales.
        const EVOLVE = this.evolutions[evolution] || ""; //Se declara variable para acceder a las evoluciones a través de su posición en el arreglo. Si se ingresa posición 10 y ésta no existe, entonces se le agregará el valor vacío. De una u otra forma se le dará un valor. También podemos poner el mensaje después del or ||, pero para este ejemplo dejaremos la cadena vacía.
        let message = "No puedo evolucionar :(";

        if (EVOLVE) { //Si EVOLVE tiene algo por dentro la condición será tomada como verdadera y se ejecuta la siguiente acción.
            message = `${this.name} está evolucionando a ${EVOLVE}` //Charmander está evolucionando a Charmaleon.
            this.name = EVOLVE; //Como es un nuevo pokemón (por su evolución) se reasigna el nombre que ahora es Charmaleon.
        }
        return message;
    }
};

const charmander = new Pokemon ("Charmander", "Fuego",[ "Charmaleon", "Charizard"]); //Para declarar un objeto de la clase -hasta antes de los paréntesis-. Sería así lo que se dice en la línea 7. 
/*const bulbasaur = new Pokemon ();
const dito = new Pokemon ("Dito");
const Pikachu = new Pokemon ("Pikachu", "Electric");*/ //Para los demás constructores.
/*charmander.evolve(); //Línea 29. Si no mando un valor, pon el valor por defecto.
charmander.evolve(1);
charmander.evolve(10); //Si se ingresa posición 10 y ésta no existe, entonces se le agregará el valor vacío. De una u otra forma se le dará un valor. Referente a línea 30, por eso se usa operador lógico OR ||.*/

const Squirtle = new Pokemon ("Squirtle","Aqua",["Wartortle", "Blastoise"]);

console.log(charmander.name);
console.log(charmander.attack());
console.log(charmander.evolve());
console.log(charmander.attack());
console.log(charmander.evolve(1));
console.log(charmander.name);

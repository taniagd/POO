class Pokedex {
    getinfo(name) { //Método get info para hacer la consulta por fetch y consultar los datos.
        fetch(`https://workshop-mongo.herokuapp.com/pokemon/name/${name}`)
        .then(data => data.json())
        .then(data => {
            //Desestructuración
            const list = ["Dragon Ball", "Code Geass", "Sailor Moon"];
            const [, anime2, anime3]=list;
            console.log(anime2 ,anime3);
           /* const Dragon = list[0];

            const [dragon, code]=list; //Se crean dos constantes (dragon y code) y se desestructuran del arreglo.
            console.log(dragon,code);*/
            //console.log(data);
            const [DATA = null] = data;
            const MESSAGE = DATA || `El pokemón ${name} no existe`;

            //console.log(MESSAGE);
        })
    }
}
const POKEDEX = new Pokedex();
POKEDEX.getinfo("charmander")

/* */
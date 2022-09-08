class Pelicula {
    personajes = [];

    constructor(nombre, personajes) {
        this.nombre = nombre;
        this.personajes = personajes;
        
    }

    numeroDePersonajes(){
       return this.personajes.length;
    }

}

export default Pelicula;
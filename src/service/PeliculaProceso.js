import Pelicula from '../models/Pelicula.js'

class PeliculaProceso {
    listaPeliculas = [];

    constructor(listaPeliculas) {
        this.listaPeliculas = listaPeliculas;
    }

    datosPelicula() {
        return this.listaPeliculas.length;
    }

    //Funcionando Ok, devuelve cantidad de personajes total
    cantTotalPersonajes(){
        let contadorPersonajes = 0;
        this.listaPeliculas.forEach(peli => {
            const p = new Pelicula(peli.nombre, peli.personajes);
            //Prueba Smoke
            //console.log(p);
            contadorPersonajes += p.numeroDePersonajes(); 
            
        });
        return contadorPersonajes;
    }

    //Esta Ok funcionando, devuelve cantidad de personajes total
    cantReducePersonajes(){
        return this.listaPeliculas.reduce((sum, pelicula) => sum + (new Pelicula(pelicula.nombre, pelicula.personajes).numeroDePersonajes()), 0)
    }

    //Esta Ok funcionando, el objeto resultado
    procesar(){
        return {resultado: {cantidadPeliculas: this.datosPelicula(), cantidadPersonajes: this.cantReducePersonajes()}}
    }
    
}

export default PeliculaProceso;
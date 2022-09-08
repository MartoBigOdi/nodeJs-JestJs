import Pelicula from '../models/Pelicula.js'

class PeliculaProceso {
    listaPeliculas = [];

    constructor(listaPeliculas) {
        this.listaPeliculas = listaPeliculas;
    }

    datosPelicula() {
        return this.listaPeliculas.length;
    }

    //Funcionando Ok
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

    //Esta Ok funcionando
    cantReducePersonajes(){
        return this.listaPeliculas.reduce((sum, pelicula) => sum + (new Pelicula(pelicula.nombre, pelicula.personajes).numeroDePersonajes()), 0)
    }

    //Esta Ok funcionando
    procesar(){
        return {resultado: {cantidadPeliculas: this.datosPelicula(), cantidadPersonajes: this.cantReducePersonajes()}}
    }
    
}

export default PeliculaProceso;
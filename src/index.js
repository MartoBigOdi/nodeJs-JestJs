import FileUtil from './service/FileUtil.js';
import PeliculaProceso from './service/PeliculaProceso.js'


const fileUtil = new FileUtil('./resource/peliculas.json');

console.log("*********************** Datos Json Peliculas ***********************")
//Probamos filUtil
console.log("Leemos Json Peliculas: " + fileUtil.leer());

const lista = JSON.parse(fileUtil.leer());

const peliculaProceso = new PeliculaProceso(lista);

const pruebaCantPersonajes = peliculaProceso.cantTotalPersonajes();
const pruebaCantPersonajesReduce = peliculaProceso.cantReducePersonajes();
const pruebaDatosPeliculas = peliculaProceso.datosPelicula();
const resultados = peliculaProceso.procesar();


fileUtil.escribir(resultados, './resource/resultadoPeliculas.json')

console.log("*********************** Datos Peliculas ***************************")

console.log( "ForEach metodo: " + pruebaCantPersonajes)
console.log( "Reduce metodo: " + pruebaCantPersonajesReduce)
console.log("Cantidad de Peliculas: " + pruebaDatosPeliculas)
console.log(peliculaProceso.procesar())

console.log("*********************** Fin del proceso ***************************")





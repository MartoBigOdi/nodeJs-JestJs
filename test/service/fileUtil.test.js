import FileUtil from '../../src/service/FileUtil.js'
import PeliculaProceso from '../../src/service/PeliculaProceso'


//Test case que valida que escriba el json correctamente 
test('el metodo leer deberia retornar el contenido del archivo', () => {
    const lista = [
        {"nombre":"Breaking bad","personajes":["Walter White","Jesse Pinkman"]},
        {"nombre":"Dark","personajes":["Jonas Kahnwald"]},
        {"nombre":"Tiempo para mi","personajes": ["Huck"]},
        {"nombre":"Viajeros","personajes":["Grant MacLaren","Marcy Warton","Kathryn MacLaren"]}
    ]
    
    try{
        const peliculaProceso = new PeliculaProceso(lista)
        const fileUtil = new FileUtil();
        const resultados = peliculaProceso.procesar();
        fileUtil.escribir(resultados, './resource/resultadoPeliculas.json')
        expect(resultados).toEqual({resultado: {cantidadPeliculas: peliculaProceso.datosPelicula(), cantidadPersonajes: peliculaProceso.cantReducePersonajes()}});
    } catch(e) {
        console.log(e);
        expect(e).toBe('Los valores son distintos');
    }
});

//Test case que valida que escriba el json incorrectamente 
test('el metodo leer deberia retornar el contenido del archivo', () => {
    const lista = [
        {"nombre":"Breaking bad","personajes":["Walter White","Jesse Pinkman"]},
        {"nombre":"Dark","personajes":["Jonas Kahnwald"]},
        {"nombre":"Tiempo para mi","personajes": ["Huck"]},
        {"nombre":"Viajeros","personajes":["Grant MacLaren","Marcy Warton","Kathryn MacLaren"]}
    ]
    
    try{
        const peliculaProceso = new PeliculaProceso(lista)
        const fileUtil = new FileUtil();
        const resultados = peliculaProceso.procesar();
        fileUtil.escribir(resultados, '')
        expect(resultados).toEqual({resultado: {cantidadPeliculas: peliculaProceso.datosPelicula(), cantidadPersonajes: peliculaProceso.cantReducePersonajes()}});
    } catch(e) {
        console.log(e);
        expect(e).toBe('No se encontro el archivo para escribir');
    }
});

//Test case que valida que mensaje de error para el usuario
test('el metodo leer deberia lanzar una excepcion si no existe el archivo', () => {
    try {
        const fileUtil = new FileUtil('./resource/noexiste.txt');
        fileUtil.leer();
    } catch(e) {
        console.log(e);
        expect(e).toBe('No se encontro el archivo para leer');
    }
});

//Validamos que lo que lee el metodo de Utils sea lo esperado.
test('Validamos que lo que tenga el texto sea lo mismo a lo esperado', () => {
    try {
        const fileUtil = new FileUtil('./resource/peliculasNotas.txt');
        expect("Soy una nota de una Pelicula de los 80").toBe(fileUtil.leer())
    } catch(e) {
        console.log(e);
        expect(e).toBe('no se encontro el archivo');
    }
});


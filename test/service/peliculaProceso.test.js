import PeliculaProceso from '../../src/service/PeliculaProceso'

test('Debe retornar la cantidad de peliculas dentro de la lista', () => {
    const lista = [
        {"nombre":"Breaking bad","personajes":["Walter White","Jesse Pinkman"]},
        {"nombre":"Dark","personajes":["Jonas Kahnwald"]},
        {"nombre":"Tiempo para mi","personajes": ["Huck"]},
        {"nombre":"Viajeros","personajes":["Grant MacLaren","Marcy Warton","Kathryn MacLaren"]}
    ]
    const peliProceso = new PeliculaProceso(lista);
    const pruebaCantPersonajes = peliProceso.cantTotalPersonajes();
    const pruebaCantPersonajesReduce = peliProceso.cantReducePersonajes();
    const cantPelis =  peliProceso.datosPelicula();
    
    expect(peliProceso.datosPelicula()).toBe(4);
    expect(pruebaCantPersonajes).toBe(7)
    expect(peliProceso.procesar()).toEqual({resultado: {cantidadPeliculas: cantPelis, cantidadPersonajes: pruebaCantPersonajesReduce}})
});



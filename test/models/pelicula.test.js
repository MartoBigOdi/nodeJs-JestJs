import Pelicula from '../../src/models/Pelicula';

test('La suma de valores deberia dar el importe del comprobante',()=>{
    const peli = new Pelicula("La vida es Bella", [{personaje:"Marto Vasconcelo", personaje:"Guada Prandi"}]);
    expect(peli.numeroDePersonajes()).toBe(1);
})



import fs from 'fs'

class FileUtil  {

    constructor(archivo) {
        this.archivo = archivo;
    }
    //Lee el archivo Json
    leer() {
        try {
            return fs.readFileSync(this.archivo,'utf-8');
        } catch (error) {
            throw 'No se encontro el archivo para leer';
        }  
    }
    //Escribimos un Json con el objeto resultado
    escribir(data, path){
        try{
            let json = JSON.stringify(data, null, 4);
            return fs.writeFileSync(path, json);
        } catch (error) {
            throw 'No se encontro el archivo para escribir';
        }  
    }
}

export default FileUtil
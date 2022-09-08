import fs from 'fs'

class FileUtil  {

    constructor(archivo) {
        this.archivo = archivo;
    }

    leer() {
        try {
            return fs.readFileSync(this.archivo,'utf-8');
        } catch (error) {
            throw 'No se encontro el archivo para leer';
        }  
    }

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
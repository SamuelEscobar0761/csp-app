import fs from 'fs';

interface Cambios {
    [key: string]: any;
}

const TextModifierService = {
    actualizarJSON: (rutaArchivo: string, cambios: string) => {
        fs.readFile(rutaArchivo, 'utf8', (error, data) => {
            if (error) {
                console.error('Error al leer el archivo JSON:', error);
                return;
            }

            const contenido: Cambios = JSON.parse(data);
            Object.assign(contenido, cambios);

            const jsonActualizado = JSON.stringify(contenido, null, 2);

            fs.writeFile(rutaArchivo, jsonActualizado, 'utf8', (error) => {
                if (error) {
                    console.error('Error al escribir el archivo JSON:', error);
                    return;
                }
                console.log('Archivo JSON actualizado con éxito.');
            });
        });
    }
};

export default TextModifierService;

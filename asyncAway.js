const{readFile} = require('fs/promises');
(async () => {
    try {
        console.log('Voy a leer el primer archivo');
        const data = await readFile('./archivo.txt', 'utf-8');
        console.log(data);
        console.log('Voy a hacer algo mientras leo el primer archivo');
        console.log('Voy a leer el segundo archivo');
        const data2 = await readFile('./archivo2.txt', 'utf-8');
        console.log(data2);
    } catch (err) {
        console.error('Error: ', err);
    }
})();
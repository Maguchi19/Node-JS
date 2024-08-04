const fs = require('fs/promises');

console.log('Voy a leer el primer archivo');
fs.readFile('./archivo.txt', 'utf-8')
.then((data) => {
    console.log(data);
}) .catch((err) => {
    console.error('Error: ', err);
});

console.log('Voy a hace algo mientras leo el primer archivo');

console.log('Voy a leer el segundo archivo');
fs.readFile('./archivo2.txt', 'utf-8').then((data) => {
    console.log(data);
}).catch((err) => {
    console.error('Error: ', err);
});
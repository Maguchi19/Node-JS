import { readFile } from "node:fs/promises";
Promise.all([  
    readFile('./archivo.txt', 'utf-8'),
    readFile('./archivo2.txt', 'utf-8')
]).then(([data, data2]) => {
    console.log(data);
    console.log(data2);
} ).catch(err => {
    console.error('Error: ', err);
});
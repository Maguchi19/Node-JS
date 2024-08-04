const path = require('node:path');

console.log(path.sep);

const filePath = path.join('content', 'subfolder', 'test.txt');
console.log(filePath);
const baseName = path.basename(filePath);
console.log(baseName);
const newName =path.basename(filePath, '.txt');
console.log(newName);
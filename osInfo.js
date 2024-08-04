const os = require('node:os');
console.log('El nombre del sistema operativo es: ', os.platform());
console.log('La versión del sistema operativo es: ', os.version());
console.log('La arquitectura del sistema operativo es: ', os.arch());
console.log('El tiempo de actividad del sistema operativo es: ', os.uptime() / 60 / 60);
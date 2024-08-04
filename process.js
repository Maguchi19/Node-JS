const fs = require('node:fs/promises');
const path = require('node:path')
const folder = process.argv[2] ?? '.';

async function ls (folder){
    let files;
    try{files = await fs.readdir(folder)}
    catch(err){
        console.error(`No se ha podido leer el directorio ${folder}`);
        process.exit(1);
    }
    
  const filesPromises = files.map(async file => {  
    const filePath  = path.join(folder, file);
    let stats
    try{
      stats = await fs.stat(filePath)// stat da el tipo de archivo
    }
    catch{
      console.error(`No se ha podido leer el archivo ${filePath}`)
      process.exit(1)
    }

    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'd' : 'a'
    const fileSize = stats.size
    const fileModified = stats.atime.toLocaleString()
    const fileModifiedM = stats.mtime.toLocaleString()


    return `${fileType} ${file.padEnd(15)} ${fileModified} ${fileModifiedM} ${fileSize.toLocaleString().padStart(10)}`;
   });
   const filesInfo = await Promise.all(filesPromises)
   filesInfo.forEach(fileInfo => console.log(fileInfo))
}
ls(folder)

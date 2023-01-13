const fs = require('fs');

// Obtener el listado de todos los directorios dentro de "views/lib"
const directories = fs.readdirSync('./views/lib', { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);
// Inicializar el objeto "fileSystem" que contendrá el listado de directorios y archivos .md
const fileSystem = [];
// Recorrer cada directorio
directories.forEach((directory) => {
  // Obtener el listado de todos los archivos .md y directorios dentro del directorio actual
  const contents = fs.readdirSync(`./views/lib/${directory}`, { withFileTypes: true });
  // Filtrar el listado para incluir solo archivos .md y directorios
  const files = contents
    .filter(item => item.isFile())
    .filter(file => file.name.endsWith('.md'))
    .map(file => file.name);
  const subdirectories = contents
    .filter(item => item.isDirectory())
    .map(subdir => subdir.name);

  // Agregar un elemento al objeto "dir" con el nombre del directorio y el listado de archivos .md y subdirectorios
  fileSystem.push({
    name: directory,
    files,
    subdirectories,
  });
});

module.exports = fileSystem;

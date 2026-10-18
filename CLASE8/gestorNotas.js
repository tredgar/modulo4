const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "notas.json");

// Función auxiliar para leer las notas del archivo JSON
function leerNotas() {
  if (!fs.existsSync(filePath)) {
    return [];
  }
  try {
    const dataBuffer = fs.readFileSync(filePath);
    return JSON.parse(dataBuffer.toString());
  } catch (e) {
    return [];
  }
}

// Función auxiliar para guardar las notas en el archivo JSON
function guardarNotas(notas) {
  fs.writeFileSync(filePath, JSON.stringify(notas, null, 2), "utf8");
}

// 1. Crear una nota
function crearNota(titulo, contenido) {
  const notas = leerNotas();
  const notaDuplicada = notas.find((nota) => nota.titulo === titulo);

  if (!notaDuplicada) {
    notas.push({ titulo, contenido });
    guardarNotas(notas);
    console.log(" ¡Nota creada exitosamente!");
  } else {
    console.log(" Error: Ya existe una nota con ese título.");
  }
}

// 2. Listar todas las notas
function listarNotas() {
  const notas = leerNotas();
  if (notas.length === 0) {
    console.log("📂 No hay notas guardadas.");
    return;
  }
  console.log("--- LISTA DE NOTAS ---");
  notas.forEach((nota, index) => {
    console.log(`${index + 1}. Título: ${nota.titulo}`);
    console.log(`   Contenido: ${nota.contenido}`);
    console.log("----------------------");
  });
}

// 3. Eliminar una nota por su título
function eliminarNota(titulo) {
  const notas = leerNotas();
  const notasFiltradas = notas.filter((nota) => nota.titulo !== titulo);

  if (notas.length > notasFiltradas.length) {
    guardarNotas(notasFiltradas);
    console.log(` ¡Nota "${titulo}" eliminada exitosamente!`);
  } else {
    console.log(` No se encontró ninguna nota con el título: "${titulo}".`);
  }
}

// Procesar comandos de la terminal
const comando = process.argv[2];
const arg1 = process.argv[3];
const arg2 = process.argv[4];

switch (comando) {
  case "crear":
    if (!arg1 || !arg2) {
      console.log(
        ' Faltan argumentos. Uso: node gestorNotas.js crear "Título" "Contenido"',
      );
    } else {
      crearNota(arg1, arg2);
    }
    break;
  case "listar":
    listarNotas();
    break;
  case "eliminar":
    if (!arg1) {
      console.log(
        ' Falta el título. Uso: node gestorNotas.js eliminar "Título"',
      );
    } else {
      eliminarNota(arg1);
    }
    break;
  default:
    console.log("Comando no reconocido.");
    console.log("Comandos disponibles:");
    console.log('  node gestorNotas.js crear "Título" "Contenido"');
    console.log("  node gestorNotas.js listar");
    console.log('  node gestorNotas.js eliminar "Título"');
    break;
}

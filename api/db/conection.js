const mysql = require('mysql');

const db = mysql.createConnection({
  user: "root",
  host:"localhost",
  database: "test",
  password: "",
});

try {

  db.connect((err) => {
    if (err) {
      throw err;
    }
    console.log('Conexión exitosa a la base de datos MySQL');
  });
} catch (error) {
  console.error('Error al conectar a la base de datos:', error.message);
}

// Manejar errores durante la ejecución de consultas
db.on('error', (err) => {
  console.error('Error en la conexión a la base de datos:', err.message);
});

// Exportar la conexión para su uso en otros módulos
module.exports = db;

// Cerrar la conexión a la base de datos cuando el proceso termine
process.on('SIGINT', () => {
  db.end((err) => {
    if (err) {
      console.error('Error al cerrar la conexión a la base de datos:', err.message);
    } else {
      console.log('Conexión a la base de datos cerrada correctamente');
    }
    process.exit();
  });
});

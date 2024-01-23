const express = require('express');
const db = require('./db/conection.js'); // Importa el archivo de configuración de la base de datos
const cors = require('cors');

const app = express();

// Configurar cors para permitir todas las solicitudes (puedes personalizar según tus necesidades)
app.use(cors());

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(express.json());


app.use(express.json());



app.get('/', (req, res) => {
  res.send('prueba api simple con node js');
});
// Ruta para guardar la información del corredor con sus camisetas



// API GET para obtener todos los usuarios
app.get('/api/usuarios', (req, res) => {

    const query = 'SELECT * FROM users';
  
    db.query(query, (error, results) => {
      if (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({ error: 'Error al obtener usuarios' });
      } else {
        console.log(results);
        res.json(results);
      }
    });
});
app.post('/api/actualizar-monto-seguro', (req, res) => {
  // Obtener los valores del cuerpo de la solicitud
  const { id, monto_seguro } = req.body;

  console.log(req.monto_seguro);

  // Verificar que se hayan proporcionado los valores necesarios
  if (!id || !monto_seguro) {
    return res.status(400).json({ error: 'Se requieren los campos id y monto_seguro en el cuerpo de la solicitud.' });
  }

  // Crear la consulta SQL para actualizar el monto_seguro
  const query = `UPDATE users SET monto_seguro='${monto_seguro}' WHERE id='${id}'`;

  // Ejecutar la consulta en la base de datos
  db.query(query, (error, results) => {
    if (error) {
      console.error('Error al actualizar monto_seguro:', error);
      res.status(500).json({ error: 'Error al actualizar monto_seguro' });
    } else {
      console.log('Monto_seguro actualizado con éxito.');
      res.json({ message: 'Monto_seguro actualizado con éxito.' });
    }
  });
});







const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});


const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const db = require('./db');

const app = express();

// Middlewares
app.use(morgan('dev')); // Morgan para logging
app.use(cors());        // Cors para permitir accesos cross-origin
app.use(express.json()); // Para manejar JSON en las peticiones

// Endpoint 'detalle_pedido' 
app.get('/pedidos', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM detalle_pedido');
    res.json(result.rows);
  } catch (err) {
    console.error('Error retrieving pedidos', err.stack);
    res.status(500).send('Error retrieving pedidos');
  }
});

// Endpoint 'proyecto'
app.get('/proyecto', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM proyecto');
    res.json(result.rows);
  } catch (err) {
    console.error('Error retrieving proyecto', err.stack);
    res.status(500).send('Error retrieving proyecto');
  }
});

// Endpoint 'usuario'
app.get('/usuario', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM usuario');
    res.json(result.rows);
  } catch (err) {
    console.error('Error retrieving usuario', err.stack);
    res.status(500).send('Error retrieving usuario');
  }
});

// Endpoint 'transporte'
app.get('/transporte', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM transporte');
    res.json(result.rows);
  } catch (err) {
    console.error('Error retrieving transporte', err.stack);
    res.status(500).send('Error retrieving transporte');
  }
});

// Endpoint 'oficina_tecnica'
app.get('/oficina_tecnica', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM oficina_tecnica');
    res.json(result.rows);
  } catch (err) {
    console.error('Error retrieving oficina_tecnica', err.stack);
    res.status(500).send('Error retrieving oficina_tecnica');
  }
});

// Endpoint 'producto'
app.get('/producto', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM producto');
    res.json(result.rows);
  } catch (err) {
    console.error('Error retrieving producto', err.stack);
    res.status(500).send('Error retrieving producto');
  }
});

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('Servidor funcionando');
});

// Escuchar en el puerto 3000 o el puerto definido en el entorno
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
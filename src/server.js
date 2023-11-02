const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Configurar body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas para obtener los nombres de los taxistas desde la base de datos (simulado)
const taxistas = ['Taxista 1', 'Taxista 2', 'Taxista 3'];

app.get('/taxistas', (req, res) => {
  res.json(taxistas);
});

app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});

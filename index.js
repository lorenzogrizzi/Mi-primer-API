// Importamos las dependencias para poder usarlas dentro de ... 
//nuestro codigo
const express = require('express');
const cors = require('cors');
const path = require('path');
// Inicializamos la aplicacion y elegimos el puerto en el que ... 
//nuestro servidor escuchara aplicaciones.
const app = express();
const port = 43922;
// Habilitamos el middleware CORS en la aplicacion
app.use(cors());
// Este middleware es responsable de analizar el cuerpo de las ... 
//solicitudes entrantes con el tipo de contenido application/json.
app.use(express.json());
app.get('/', (req, res) => {
 // ver seccion Metodo GET
 });

 app.post('/', (req, res) => {
    // ver seccion Metodo POST
    });
// Este m t o d o inicia el servidor Express y lo pone a la ...
//escucha de solicitudes entrantes en un puerto espec fico.
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
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
    try{
    // Aca va lo que quiero que funcione.
    console.log(__dirname)
    res.sendFile(path.join(__dirname, 'index.html'));
    } catch(e){
    // Manejo de errores si falla lo anterior.
    res.status(500).send({'error': 'Internal server error'})
    }
    });

// Creamos dos arreglos en donde almacenaremos los mails y los ...
//usuarios.
const arreglo_usuarios = Array()
const arreglo_mails = Array()

app.post('/', (req, res) => {

// Guardamos el usuario y el email que venian en el Json del ...
//body en dos variables.
const {usuario, email} = req.body;

// Guardamos el usuario en el arreglo de usuarios.
arreglo_usuarios.push(usuario)
arreglo_mails.push(email)

// Imprimimos los arrays para ver si se estan agregando los ...
//elementos
console.log(arreglo_usuarios)
console.log(arreglo_mails)

// Devolvemos un codigo de respuesta 201 indicando que el ...
//recurso fue creado con exito junto con el usuario y el ...
//mail que fueron recibidos.
res.status(201).send({usuario,email})
});
// Este m t o d o inicia el servidor Express y lo pone a la ...
//escucha de solicitudes entrantes en un puerto espec fico.
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
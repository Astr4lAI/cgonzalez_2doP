const express = require('express');
const route = require('./rutas/route');

const app = express();

app.use(express.json());
app.use('/route',route);

app.listen(3302,()=>{
    console.log('Servidor ejecutandose en el puerto 3302 ');
})
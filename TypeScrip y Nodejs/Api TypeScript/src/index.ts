import express from 'express';
//creamos la aplicacion a traves del paquete express
//y llamamos a su constructor
const app = express();
//configurar rutas para el acceso al personal
import personalRutas from './routes/personalRutas';

//todo lo que regresa al usuario es de tipo JSON
app.use(express.json());
//Puerto para escuchar la peticion de l frontend
const PUERTO = 3001;
//activar la ruta base
app.use('/api/personal',personalRutas);
//ruta
// app.get('/hola', (_req, res) =>{
//     let fecha = new Date().toLocaleDateString();
//     res.send('Mundo con la fecha' + fecha+' con Typescript');
// })

//Encendemos el servidor y lo ponemos en escucha
app.listen(PUERTO, ()=>{
    console.log('Nuestro servidor esta encendido en el puerto ${PUERTO}')
})


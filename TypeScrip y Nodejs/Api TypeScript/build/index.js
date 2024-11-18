"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//creamos la aplicacion a traves del paquete express
//y llamamos a su constructor
const app = (0, express_1.default)();
//configurar rutas para el acceso al personal
const personalRutas_1 = __importDefault(require("./routes/personalRutas"));
//todo lo que regresa al usuario es de tipo JSON
app.use(express_1.default.json());
//Puerto para escuchar la peticion de l frontend
const PUERTO = 3001;
//activar la ruta base
app.use('/api/personal', personalRutas_1.default);
//ruta
// app.get('/hola', (_req, res) =>{
//     let fecha = new Date().toLocaleDateString();
//     res.send('Mundo con la fecha' + fecha+' con Typescript');
// })
//Encendemos el servidor y lo ponemos en escucha
app.listen(PUERTO, () => {
    console.log('Nuestro servidor esta encendido en el puerto ${PUERTO}');
});

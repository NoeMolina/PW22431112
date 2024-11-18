"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modificarPersonal = exports.agregarPersonal = exports.encuentraPersonal = exports.obtienePersonal = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
const conexion = promise_1.default.createPool({
    host: "localhost",
    user: "pw",
    password: "pw2024",
    database: "pw2024"
});
const obtienePersonal = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [results] = yield conexion.query('select * from personal');
        return results;
    }
    catch (error) {
        return { error: "no se puede obtener el personal" };
    }
});
exports.obtienePersonal = obtienePersonal;
const encuentraPersonal = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [results] = yield conexion.query('SELECT * FROM PERSONAL WHERE id = ? LIMIT 1', id);
        return results;
    }
    catch (error) {
        return { error: "No se encuentra ese personal" };
    }
});
exports.encuentraPersonal = encuentraPersonal;
const agregarPersonal = (nuevo) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [results] = yield conexion.query('INSERT INTO personal(nombre, direccion,telefono,estatus) values (?,?,?,?)', [nuevo.nombre, nuevo.direccion, nuevo.telefono, nuevo.estatus]);
        return results;
    }
    catch (error) {
        return { error: "No se puede agregar al personal" };
    }
});
exports.agregarPersonal = agregarPersonal;
const modificarPersonal = (modificado) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [result] = yield conexion.query('UPDATE personal SET  nombre = ?,telefono = ?, direccion = ?, estatus = ? WHERE id = ?', [modificado.nombre, , modificado.telefono, modificado.direccion, modificado.estatus, modificado.id]);
        return result;
    }
    catch (error) {
        return { error: "No se puede modificar" };
    }
});
exports.modificarPersonal = modificarPersonal;
